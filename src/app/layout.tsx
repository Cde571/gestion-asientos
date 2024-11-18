export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="header-content">
            <h1>Singapur Airlines</h1>
            <div className="user-info">
              <span>DG</span>
            </div>
          </div>
        </header>
        {children}
        <footer className="footer">
          <p>© 2024 - CodeFactory UdeA | Términos y Condiciones</p>
        </footer>
      </body>
    </html>
  );
}
