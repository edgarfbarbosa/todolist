import { Header } from '../components/Header'
import { DayOverview } from '../components/DayOverview'
import { TaskList } from '../components/TaskList'
import { TaskQuickAdd } from '../components/TaskQuickAdd'

export function TasksScreen() {
  return (
    <>
      <Header />
      <DayOverview />
      <TaskList />
      <TaskQuickAdd />
    </>
  )
}
