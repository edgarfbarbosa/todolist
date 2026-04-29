import { View } from 'react-native'
import { HabitItem } from './HabitItem'
import useHabitStore from '../stores/useHabitStore'

export function HabitList() {
  const habits = useHabitStore((state) => state.habits)

  return (
    <View>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          id={habit.id}
          name={habit.name}
          completed={habit.completed}
          time={habit.time}
        />
      ))}
    </View>
  )
}
