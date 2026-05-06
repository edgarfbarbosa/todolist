import { create, StateCreator } from 'zustand'
import { Task } from '../types/task'

interface TaskStore {
  tasks: Task[]
  toggleTaskCompleted: (id: string) => void
  createTask: (task: Task) => void
}

const taskStore: StateCreator<TaskStore> = (set) => ({
  tasks: [
    {
      id: '1',
      name: 'Definir prioridades do dia',
      completed: false,
      time: '9:00',
    },
    {
      id: '2',
      name: 'Revisar lista de tarefas',
      completed: false,
    },
  ],

  createTask: (task: Task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),

  toggleTaskCompleted: (id: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    })),
})

const useTaskStore = create<TaskStore>(taskStore)

export default useTaskStore
