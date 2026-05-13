import { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import {
  Circle,
  CircleCheck,
  Clock,
  EllipsisVertical,
  Trash2,
  ArrowUp,
  ArrowDown,
} from 'lucide-react-native'
import useTaskStore from '../stores/useTaskStore'
import { Task } from '../types/task'

export function TaskItem({ id, name, completed, time, pomodoros }: Task) {
  const [isEditing, setIsEditing] = useState(false)
  const [newTaskName, setNewTaskName] = useState(name)
  const [newPomodoroAmount, setNewPomodoroAmount] = useState(pomodoros)

  const toggleTaskCompleted = useTaskStore(
    (state) => state.toggleTaskCompleted,
  )

  const deleteTask = useTaskStore((state) => state.deleteTask)

  const updateTaskName = useTaskStore((state) => state.updateTaskName)

  const updateTaskPomodoros = useTaskStore(
    (state) => state.updateTaskPomodoros,
  )

  function handleCheckboxPress() {
    toggleTaskCompleted(id)
  }

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
    <View className="flex-col p-5 mx-4 mb-4 rounded-xl bg-gray-300">
      <View className="flex-row items-center justify-between ">
        <View className="flex-col gap-2">
          {time ? (
            <Text className="text-sm font-inter-bold -tracking-wider">
              {time}
            </Text>
          ) : null}

          <Text
            className={`text-xl font-inter-bold
            ${completed ? 'line-through text-secondary' : 'text-black'}`}
          >
            {name}
          </Text>

          <View className="flex-row items-center gap-1">
            <Clock size={14} color="#777777" />
            <Text className="text-xs text-secondary font-inter-bold uppercase">
              {pomodoros} pomodoros
            </Text>
          </View>
        </View>

        <View className="flex-row gap-2">
          <Pressable
            onPress={handleCheckboxPress}
            className={`w-16 h-16 items-center justify-center rounded-xl border-solid border-2
        ${completed ? 'bg-primary border-primary' : 'bg-white border-secondary'}`}
          >
            {completed ? (
              <CircleCheck size={24} color="white" />
            ) : (
              <Circle size={24} color="#777777" />
            )}
          </Pressable>
          <Pressable
            onPress={handleEditingButtonPress}
            className="w-16 h-16 items-center justify-center rounded-xl border-solid border-2 border-black"
          >
            <EllipsisVertical />
          </Pressable>
        </View>
      </View>

      {isEditing ? (
        <View className="flex-col">
          <View className="mb-5">
            <TextInput
              value={newTaskName}
              onChangeText={setNewTaskName}
              className="text-2xl font-inter-bold border-b border-solid border-secondary py-3 focus:outline-none"
            />
          </View>

          <View className="flex-col gap-2">
            <Text className="font-inter-extra-bold text-sm uppercase text-secondary">
              Act / Pomodoros Estimados
            </Text>
            <View>
              <View className="flex-row gap-4 items-center">
                <Text className="font-inter-bold text-secondary text-2xl">
                  0
                </Text>
                <Text className="font-inter-bold text-secondary text-2xl">
                  /
                </Text>
                <Text className="font-inter-bold text-secondary text-2xl">
                  {newPomodoroAmount}
                </Text>
                <View className="flex-col gap-2">
                  <Pressable
                    onPress={handleIncreaseNewPomodoroAmount}
                    className="w-10 h-10 border border-secondary items-center justify-center"
                  >
                    <ArrowUp />
                  </Pressable>
                  <Pressable
                    onPress={handleDecreaseNewPomodoroAmount}
                    className="w-10 h-10 border border-secondary items-center justify-center"
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
                className="h-12 w-32 font-inter-bold items-center justify-center text-secondary bg-transparent rounded-lg text-sm uppercase"
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
