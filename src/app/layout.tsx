import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ProviderComponent } from '@/components/ProviderComponent';

// Font used in the project - Poppins [400, 700]
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
        {/* 
          This component is reponsible for wrapper the other else components and providers
         */}
        <ProviderComponent>
          {children}
        </ProviderComponent>
      </body>
    </html>
  )
}
