import "./globals.css";
import Provider from "./util/Provider";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
