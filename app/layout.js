import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { AuthProvider } from './Providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ak Global - Track your Shipment',
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
      <body className={inter.className}>
        <div className='relative min-h-screen'>
          <AuthProvider>
            {children}
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
