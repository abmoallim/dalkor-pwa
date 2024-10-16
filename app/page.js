// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Dalkor</h1>
      <p className="text-xl">Manage your prepaid electricity with ease</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/monitor" className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition">
          Monitor Usage
        </Link>
        <Link href="/purchase" className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition">
          Purchase Token
        </Link>
        <Link href="/topup" className="bg-purple-500 text-white p-4 rounded-lg text-center hover:bg-purple-600 transition">
          Top Up
        </Link>
      </div>
    </div>
  )
}