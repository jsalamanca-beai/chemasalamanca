import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface RateLimitEntry {
  timestamps: number[];
}

// ---------------------------------------------------------------------------
// Rate limiting  (in-memory, IP-based, max 5 requests per hour)
// ---------------------------------------------------------------------------

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const rateLimitMap = new Map<string, RateLimitEntry>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { timestamps: [now] });
    return false;
  }

  // Keep only timestamps within the window
  entry.timestamps = entry.timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );

  if (entry.timestamps.length >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.timestamps.push(now);
  return false;
}

// Periodically clean up stale entries (every 10 minutes)
if (typeof globalThis !== 'undefined') {
  const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitMap.entries()) {
      entry.timestamps = entry.timestamps.filter(
        (ts) => now - ts < RATE_LIMIT_WINDOW_MS
      );
      if (entry.timestamps.length === 0) {
        rateLimitMap.delete(ip);
      }
    }
  }, CLEANUP_INTERVAL_MS);
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function validateContactForm(
  body: unknown
): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'El cuerpo de la solicitud es invalido.' };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: 'El nombre es obligatorio.' };
  }

  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    return { valid: false, error: 'El email es obligatorio.' };
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: 'El formato del email no es valido.' };
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    return { valid: false, error: 'El asunto es obligatorio.' };
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return { valid: false, error: 'El mensaje es obligatorio.' };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    },
  };
}

// ---------------------------------------------------------------------------
// Subject label mapping
// ---------------------------------------------------------------------------

const subjectLabels: Record<string, string> = {
  asesoria: 'Asesoria Estrategica en IA',
  consejo: 'Consejos de Administracion',
  conferencia: 'Conferencia o Ponencia',
  colaboracion: 'Colaboracion / Emprendimiento',
  otro: 'Otro',
};

// ---------------------------------------------------------------------------
// HTML email builder
// ---------------------------------------------------------------------------

function buildEmailHtml(data: ContactFormData): string {
  const subjectLabel = subjectLabels[data.subject] || data.subject;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#f4f4f5; font-family:Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4f4f5; padding:40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background-color:#0d9488; padding:28px 32px;">
              <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:700;">
                Nuevo mensaje desde tu web
              </h1>
              <p style="margin:6px 0 0; color:#ccfbf1; font-size:14px;">
                Formulario de contacto &middot; chemasalamanca.me
              </p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <!-- Name -->
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Nombre</p>
                    <p style="margin:0; font-size:16px; color:#1f2937; font-weight:600;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>
                <!-- Email -->
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Email</p>
                    <p style="margin:0; font-size:16px;">
                      <a href="mailto:${escapeHtml(data.email)}" style="color:#0d9488; text-decoration:none;">${escapeHtml(data.email)}</a>
                    </p>
                  </td>
                </tr>
                <!-- Subject -->
                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Asunto</p>
                    <p style="margin:0; font-size:16px; color:#1f2937;">${escapeHtml(subjectLabel)}</p>
                  </td>
                </tr>
                <!-- Divider -->
                <tr>
                  <td style="padding-bottom:20px;">
                    <hr style="border:none; border-top:1px solid #e5e7eb;" />
                  </td>
                </tr>
                <!-- Message -->
                <tr>
                  <td>
                    <p style="margin:0 0 4px; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Mensaje</p>
                    <div style="margin-top:8px; padding:16px; background-color:#f9fafb; border-radius:8px; border:1px solid #e5e7eb;">
                      <p style="margin:0; font-size:15px; color:#374151; line-height:1.6; white-space:pre-wrap;">${escapeHtml(data.message)}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px; background-color:#f9fafb; border-top:1px solid #e5e7eb;">
              <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center;">
                Este email fue enviado desde el formulario de contacto de chemasalamanca.me
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          error:
            'Has enviado demasiados mensajes. Por favor, intenta de nuevo mas tarde.',
        },
        { status: 429 }
      );
    }

    // --- Parse body ---
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'El cuerpo de la solicitud no es JSON valido.' },
        { status: 400 }
      );
    }

    // --- Validate ---
    const validation = validateContactForm(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { data } = validation;

    // --- Check Resend API key ---
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Error de configuracion del servidor. Contacta por email directamente.' },
        { status: 500 }
      );
    }

    // --- Send email via Resend ---
    const resend = new Resend(resendApiKey);

    const subjectLabel = subjectLabels[data.subject] || data.subject;

    const { error: resendError } = await resend.emails.send({
      from: 'Formulario Web <web@chemasalamanca.me>',
      to: process.env.CONTACT_EMAIL || 'jose.salamanca@nichotecnologico.com',
      replyTo: data.email,
      subject: `[Web] ${subjectLabel} - ${data.name}`,
      html: buildEmailHtml(data),
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      return NextResponse.json(
        {
          error:
            'No se pudo enviar el mensaje. Por favor, intenta de nuevo o contacta por email.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json(
      {
        error:
          'Ha ocurrido un error inesperado. Por favor, intenta de nuevo mas tarde.',
      },
      { status: 500 }
    );
  }
}
