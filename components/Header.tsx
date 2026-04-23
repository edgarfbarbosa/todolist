import { View, Text, Pressable } from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'

export function Header() {
  return (
    <View className="w-full flex-row justify-between items-center px-6 pb-4 pt-1">
      <Pressable>
        <Feather name="menu" size={24} color="black" />
      </Pressable>

      <Text className="text-xl font-bold tracking-tighter font-inter-black">
        To Do List
      </Text>

      <View>
        <FontAwesome name="user-circle" size={24} color="black" />
      </View>
    </View>
  )
}
