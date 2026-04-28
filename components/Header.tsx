import { View, Text, Pressable } from 'react-native'
import { Menu, CircleUserRound } from 'lucide-react-native'

export function Header() {
  return (
    <View className="w-full flex-row justify-between items-center px-6 pb-4 pt-1">
      <Pressable>
        <Menu size={24} color="black" />
      </Pressable>

      <Text className="text-xl font-bold tracking-tighter font-inter-black">
        To Do List
      </Text>

      <View>
        <CircleUserRound size={24} color="black" />
      </View>
    </View>
  )
}
