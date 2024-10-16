// app/purchase/page.js
'use client'
import { useState } from 'react'

export default function Purchase() {
  const [amount, setAmount] = useState('')
  const [token, setToken] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to purchase a token
    setToken('ABC123XYZ')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Purchase Electricity Token</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount in KW"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Purchase Token
        </button>
      </form>
      {token && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Your Token</h2>
          <p className="text-2xl font-mono">{token}</p>
          <p className="mt-2 text-sm text-gray-600">Use this token to top up your meter</p>
        </div>
      )}
    </div>
  )
}
