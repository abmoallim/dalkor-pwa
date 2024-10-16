// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dalkor - Prepaid Electricity Service',
  description: 'Monitor and manage your prepaid electricity with ease',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="manifest" href="/manifest.json" />
        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Dalkor</h1>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 p-4 text-center">
            <p>&copy; 2024 Dalkor. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
