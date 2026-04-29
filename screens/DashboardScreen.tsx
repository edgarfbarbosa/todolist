import { Header } from '../components/Header'
import { DayOverview } from '../components/DayOverview'
import { HabitList } from '@/components/HabitList'

export function DashboardScreen() {
  return (
    <>
      <Header />
      <DayOverview />
      <HabitList />
    </>
  )
}
