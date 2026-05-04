import { Header } from '../components/Header'
import { DayOverview } from '../components/DayOverview'
import { TaskList } from '@/components/TaskList'

export function TasksScreen() {
  return (
    <>
      <Header />
      <DayOverview />
      <TaskList />
    </>
  )
}
