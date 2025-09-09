import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { SalesData } from '@/utils/mockData'

interface ChartCardProps {
  title: string
  data: SalesData[]
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data }) => {
  return (
    <div className="bg-white shadow rounded p-4 w-full h-96">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#4B6CB7" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartCard
