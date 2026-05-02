import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import Navigation from '@/components/Navigation';

import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Mishu Debnath | Portfolio',
  description: 'Portfolio of Mishu Debnath - Web Developer and Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LenisProvider>
          {/* <CustomCursor /> */}
          <Navigation />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
