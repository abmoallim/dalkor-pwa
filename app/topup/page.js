// app/topup/page.js
'use client'
import { useState } from 'react'

export default function TopUp() {
  const [meterNumber, setMeterNumber] = useState('')
  const [token, setToken] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send a request to top up the meter
    setSuccess(true)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Top Up Your Electricity</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
          placeholder="Enter your meter number"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your token"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
          Top Up
        </button>
      </form>
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
          <p className="font-bold">Success!</p>
          <p>Your meter has been successfully topped up.</p>
        </div>
      )}
    </div>
  )
}