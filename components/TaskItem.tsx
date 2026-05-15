import { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import {
  EllipsisVertical,
  Trash2,
  ArrowUp,
  ArrowDown,
} from 'lucide-react-native'
import useTaskStore from '../stores/useTaskStore'
import { Task } from '../types/task'

export function TaskItem({ id, name, completed, pomodoros }: Task) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTaskName, setNewTaskName] = useState(name)
  const [newPomodoroAmount, setNewPomodoroAmount] = useState(pomodoros)

  const deleteTask = useTaskStore((state) => state.deleteTask)

  const updateTaskName = useTaskStore((state) => state.updateTaskName)

  const updateTaskPomodoros = useTaskStore(
    (state) => state.updateTaskPomodoros,
  )

  function handleEditingButtonPress() {
    setIsEditing((prev) => !prev)
  }

  function handleDeleteButtonPress() {
    deleteTask(id)
  }

  function handleSaveButtonPress() {
    if (!newTaskName.trim()) return

    updateTaskName(id, newTaskName)
    updateTaskPomodoros(id, newPomodoroAmount)

    setIsEditing(false)
  }

  function handleCancelButtonPress() {
    setNewTaskName(name)
    setNewPomodoroAmount(pomodoros)
    setIsEditing(false)
  }

  function handleIncreaseNewPomodoroAmount() {
    setNewPomodoroAmount((prev) => prev + 1)
  }

  function handleDecreaseNewPomodoroAmount() {
    setNewPomodoroAmount((prev) => Math.max(1, prev - 1))
  }

  return (
    <View className="flex-col mx-4 mb-4 p-5 rounded-xl bg-surface-2 border-l-4 border-l-primary">
      <View className="flex-row items-center justify-between">
        <View className="flex-1 pr-8">
          <Text
            className={`text-xl font-inter-bold -tracking-wide
            ${completed ? 'line-through text-tertiary' : 'text-black'}`}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>
        </View>

        <View className="flex-row items-center gap-3">
          <Text className="text-sm text-tertiary font-inter-bold uppercase -tracking-wide">
            <Text className="text-lg">0</Text> / {pomodoros}
          </Text>
          <Pressable
            onPress={handleEditingButtonPress}
            className="w-10 h-10 items-center justify-center rounded-lg bg-surface"
          >
            <EllipsisVertical size={24} color="#333333" />
          </Pressable>
        </View>
      </View>

      {isEditing ? (
        <View className="flex-col">
          <View className="mb-5">
            <TextInput
              value={newTaskName}
              onChangeText={setNewTaskName}
              className="text-2xl font-inter-bold border-b border-solid border-tertiary py-3 focus:outline-none"
            />
          </View>

          <View className="flex-col gap-2">
            <Text className="font-inter-extra-bold text-sm uppercase text-tertiary">
              Act / Pomodoros Estimados
            </Text>
            <View>
              <View className="flex-row gap-4 items-center">
                <Text className="font-inter-bold text-tertiary text-2xl">
                  0
                </Text>
                <Text className="font-inter-bold text-tertiary text-2xl">
                  /
                </Text>
                <Text className="font-inter-bold text-tertiary text-2xl">
                  {newPomodoroAmount}
                </Text>
                <View className="flex-col gap-2">
                  <Pressable
                    onPress={handleIncreaseNewPomodoroAmount}
                    className="w-10 h-10 border border-tertiary items-center justify-center"
                  >
                    <ArrowUp />
                  </Pressable>
                  <Pressable
                    onPress={handleDecreaseNewPomodoroAmount}
                    className="w-10 h-10 border border-tertiary items-center justify-center"
                  >
                    <ArrowDown />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row items-center">
            <Pressable onPress={handleDeleteButtonPress}>
              <Trash2 size={24} color="#777777" />
            </Pressable>

            <View className="flex-row gap-4">
              <Pressable
                onPress={handleCancelButtonPress}
                className="h-12 w-32 font-inter-bold items-center justify-center text-tertiary bg-transparent rounded-lg text-sm uppercase"
              >
                Cancel
              </Pressable>
              <Pressable
                onPress={handleSaveButtonPress}
                className="h-12 w-32 font-inter-bold items-center justify-center text-white bg-black rounded-lg text-sm uppercase"
              >
                Save
              </Pressable>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  )
}
