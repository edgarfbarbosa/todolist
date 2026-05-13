import { create, StateCreator } from 'zustand'
import { Task } from '../types/task'

interface TaskStore {
  tasks: Task[]
  toggleTaskCompleted: (id: string) => void
  createTask: (task: Task) => void
  deleteTask: (id: string) => void
  updateTaskName: (id: string, name: string) => void
  updateTaskPomodoros: (id: string, pomodoros: number) => void
}

const taskStore: StateCreator<TaskStore> = (set) => ({
  tasks: [
    {
      id: '3',
      name: 'Desenvolver meu projeto',
      completed: false,
      pomodoros: 3,
      time: '18:00 PM',
    },
  ],

  createTask: (task: Task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),

  updateTaskName: (id: string, name: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, name } : task,
      ),
    })),

  updateTaskPomodoros: (id: string, pomodoros: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, pomodoros } : task,
      ),
    })),

  deleteTask: (id: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  toggleTaskCompleted: (id: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    })),
})

const useTaskStore = create<TaskStore>(taskStore)

export default useTaskStore
