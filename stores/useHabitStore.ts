import { create, StateCreator } from 'zustand'
import { Habit } from '../types/habit'

interface HabitStore {
  habits: Habit[]
  toggleHabitCompleted: (id: string) => void
}

const habitStore: StateCreator<HabitStore> = (set) => ({
  habits: [
    {
      id: '1',
      name: 'Corrida matinal',
      completed: false,
      time: '9:00 AM',
    },
    {
      id: '2',
      name: 'Meditar',
      completed: false,
    },
  ],

  toggleHabitCompleted: (id: string) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit,
      ),
    })),
})

const useHabitStore = create<HabitStore>(habitStore)

export default useHabitStore
