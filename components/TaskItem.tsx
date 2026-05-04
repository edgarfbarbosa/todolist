import { View, Text, Pressable } from 'react-native'
import { Circle, CircleCheck } from 'lucide-react-native'
import useTaskStore from '../stores/useTaskStore'
import { Task } from '../types/task'

export function TaskItem({ id, name, completed, time }: Task) {
  const toggleTaskCompleted = useTaskStore(
    (state) => state.toggleTaskCompleted,
  )

  function handleCheckboxPress() {
    toggleTaskCompleted(id)
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
            ${completed ? 'line-through text-secondary' : 'text-black'}`}
        >
          {name}
        </Text>
      </View>

      <View
        className={`w-16 h-16 items-center justify-center rounded-xl border-solid border-2
        ${completed ? 'bg-primary border-primary' : 'bg-white border-secondary'}`}
      >
        {completed ? (
          <CircleCheck size={24} color="white" />
        ) : (
          <Circle size={24} color="#777777" />
        )}
      </View>
    </Pressable>
  )
}
