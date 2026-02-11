
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="arcana-bg">{children}</body>
    </html>
  );
}
