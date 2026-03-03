// Root layout — locale-agnostic wrapper.
// The [locale]/layout.tsx handles html, body, fonts, metadata, and DictionaryProvider.
// The middleware redirects "/" to "/en" (default locale).

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
