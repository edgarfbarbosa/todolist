import { View, Text } from 'react-native'

export function DayOverview() {
  return (
    <View className="flex-row justify-between items-end py-6 px-4">
      <View>
        <Text className="text-sm text-secondary font-inter-bold uppercase -tracking-wider">
          Wednesday, Oct 23
        </Text>

        <Text className="text-6xl uppercase font-inter-extra-bold -tracking-wider mt-1">
          Hoje
        </Text>
      </View>

      <View className="items-center">
        <Text className="text-4xl text-primary font-inter-black">85%</Text>
        <Text className="text-xs text-secondary font-inter-bold uppercase">
          Daily Score
        </Text>
      </View>
    </View>
  )
}
