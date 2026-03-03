import { redirect } from 'next/navigation';

// Redirect root "/" to the default locale "/en".
// The middleware also handles this, but this ensures SSG compatibility.
export default function RootPage() {
  redirect('/en');
}
