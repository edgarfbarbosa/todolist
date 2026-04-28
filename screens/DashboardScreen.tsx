import { Header } from '../components/Header'
import { DayOverview } from '../components/DayOverview'
import { HabitItem } from '../components/HabitItem'

export function DashboardScreen() {
  return (
    <>
      <Header />
      <DayOverview />
      <HabitItem habit="Corrida matinal" completed={false} time="9:00 AM" />
    </>
  )
}
