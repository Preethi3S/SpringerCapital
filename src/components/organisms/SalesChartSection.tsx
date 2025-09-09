'use client'

import React, { useState } from 'react'
import ChartCard from '@/components/molecules/ChartCard'
import { salesData, SalesData } from '@/utils/mockData'
import Input from '@/components/atoms/Input'

const SalesChartSection: React.FC = () => {
  const [threshold, setThreshold] = useState('0')

  const filteredData: SalesData[] = salesData.filter(
    (item) => item.sales >= parseInt(threshold)
  )

  return (
    <div className="space-y-4">
      <div className="max-w-sm">
        <Input
          value={threshold}
          onChange={setThreshold}
          placeholder="Enter minimum sales threshold"
        />
      </div>
      <ChartCard title="Sales Over Years" data={filteredData} />
    </div>
  )
}

export default SalesChartSection
