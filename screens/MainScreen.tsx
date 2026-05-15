import { TaskList } from '../components/TaskList'
import { TaskQuickAdd } from '../components/TaskQuickAdd'

export function MainScreen() {
  return (
    <>
      <TaskList />
      <TaskQuickAdd />
    </>
  )
}
