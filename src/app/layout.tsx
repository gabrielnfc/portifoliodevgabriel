import '../style/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Portifólio | Gabriel Nascimento',
  description: 'Meu portifólio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
