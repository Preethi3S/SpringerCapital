import SalesChartSection from '@/components/organisms/SalesChartSection'

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <SalesChartSection />
    </div>
  )
}
