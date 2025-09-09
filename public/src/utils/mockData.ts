export type SalesData = {
  year: number
  month: string
  sales: number
}

export const salesData: SalesData[] = [
  // Mock data for 2022
  { year: 2022, month: 'Jan', sales: 12000 },
  { year: 2022, month: 'Feb', sales: 15000 },
  { year: 2022, month: 'Mar', sales: 14000 },
  // Mock data for 2023
  { year: 2023, month: 'Jan', sales: 18000 },
  { year: 2023, month: 'Feb', sales: 20000 },
  { year: 2023, month: 'Mar', sales: 17000 },
  // Mock data for 2024
  { year: 2024, month: 'Jan', sales: 22000 },
  { year: 2024, month: 'Feb', sales: 24000 },
  { year: 2024, month: 'Mar', sales: 23000 },
]
