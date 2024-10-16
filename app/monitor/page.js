// app/monitor/page.js
'use client'
import { useState } from 'react'

export default function Monitor() {
  const [meterNumber, setMeterNumber] = useState('')
  const [usage, setUsage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically fetch the usage data from an API
    setUsage({
      kwLeft: 150,
      dailyAverage: 10,
      monthlyUsage: 300
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Monitor Your Electricity Usage</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
          placeholder="Enter your meter number"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Check Usage
        </button>
      </form>
      {usage && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Your Electricity Usage</h2>
          <p>KW Left: {usage.kwLeft}</p>
          <p>Daily Average: {usage.dailyAverage} KW</p>
          <p>Monthly Usage: {usage.monthlyUsage} KW</p>
        </div>
      )}
    </div>
  )
}


