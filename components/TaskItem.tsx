import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import {
  Circle,
  CircleCheck,
  Clock,
  EllipsisVertical,
  Trash2,
} from 'lucide-react-native'
import useTaskStore from '../stores/useTaskStore'
import { Task } from '../types/task'

export function TaskItem({ id, name, completed, time, pomodoros }: Task) {
  const [isEditing, setIsEditing] = useState(false)

  const toggleTaskCompleted = useTaskStore(
    (state) => state.toggleTaskCompleted,
  )

  const deleteTask = useTaskStore((state) => state.deleteTask)

  function handleCheckboxPress() {
    toggleTaskCompleted(id)
  }

  function handleEditingButtonPress() {
    setIsEditing((prev) => !prev)
  }

  function handleDeleteButtonPress() {
    deleteTask(id)
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
        <View className="flex-row items-center">
          <Pressable onPress={handleDeleteButtonPress}>
            <Trash2 size={24} color="#777777" />
          </Pressable>

          <View className="flex-row gap-4">
            <Pressable className="h-12 w-32 font-inter-bold items-center justify-center text-secondary bg-transparent rounded-lg text-sm uppercase">
              Cancel
            </Pressable>
            <Pressable className="h-12 w-32 font-inter-bold items-center justify-center text-white bg-black rounded-lg text-sm uppercase">
              Save
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  )
}
