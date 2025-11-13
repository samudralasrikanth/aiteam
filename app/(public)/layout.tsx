// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '../providers/ThemeProvider';
import { AuthProvider } from '../providers/AuthProvider';
import { StoreProvider } from '../providers/StoreProvider';
import Header from '../../components/navigation/Header';

export const metadata = {
  title: 'Aiteam',
  description: 'AI Developer Teams as a Service',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <StoreProvider>
              <Header />
              <main>{children}</main>
            </StoreProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
