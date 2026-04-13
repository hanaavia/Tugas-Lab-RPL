import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CINESPHERE | Database',
  description: 'Project RPL Film Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] selection:bg-orange-600 selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
