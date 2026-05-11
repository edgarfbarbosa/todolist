import { View } from 'react-native'
import { TaskItem } from './TaskItem'
import useTaskStore from '../stores/useTaskStore'

export function TaskList() {
  const tasks = useTaskStore((state) => state.tasks)

  return (
    <View>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          time={task.time}
          pomodoros={task.pomodoros}
        />
      ))}
    </View>
  )
}
