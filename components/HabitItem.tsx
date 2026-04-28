import { View, Text, Pressable } from 'react-native'
import { Circle, CircleCheck } from 'lucide-react-native'
import { useState } from 'react'

type HabitItemProps = {
  habit: string
  completed: boolean
  time?: string
}

export function HabitItem({ habit, completed, time }: HabitItemProps) {
  const [isCompleted, setIsCompleted] = useState(completed)

  function handleCheckboxPress() {
    setIsCompleted((prev) => !prev)
  }

  return (
    <Pressable
      onPress={handleCheckboxPress}
      className="flex-row items-center justify-between p-5 mx-4 mb-4 rounded-xl bg-white"
    >
      <View>
        {time ? (
          <Text className="text-sm font-inter-bold -tracking-wider mb-2">
            {time}
          </Text>
        ) : null}

        <Text
          className={`text-xl font-inter-bold
            ${isCompleted ? 'line-through text-secondary' : 'text-black'}`}
        >
          {habit}
        </Text>
      </View>

      <View
        className={`w-16 h-16 items-center justify-center rounded-xl border-solid border-2
        ${isCompleted ? 'bg-primary border-primary' : 'bg-white border-secondary'}`}
      >
        {isCompleted ? (
          <CircleCheck size={24} color="white" />
        ) : (
          <Circle size={24} color="#777777" />
        )}
      </View>
    </Pressable>
  )
}
