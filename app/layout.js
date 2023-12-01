import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from './Providers';

const font = Poppins({ subsets: ['latin'], weight: "300" });

export const metadata = {
  title: 'Ak Global Shipping Services PTE.',
  description: 'Ak Global Ship Services PTE.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png'/>
      </head>
      <body className={font.className}>
        <div className='relative min-h-screen'>
          <AuthProvider>
            {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
