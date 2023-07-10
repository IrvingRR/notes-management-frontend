import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ProviderComponent } from '@/components/ProviderComponent';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'] 
});

export const metadata: Metadata = {
  title: 'Note Management App',
  description: 'Application to note management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ProviderComponent>
          {children}
        </ProviderComponent>
      </body>
    </html>
  )
}
