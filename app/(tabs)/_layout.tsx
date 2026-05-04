import { Tabs } from 'expo-router'
import { CheckSquare } from 'lucide-react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#F8F9FA',
          paddingHorizontal: 32,
          paddingTop: 16,
          paddingBottom: 32,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: 'Inter_700Bold',
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          marginTop: 4,
        },
        tabBarActiveTintColor: '#0033FF',
        tabBarInactiveTintColor: '#999999',
      }}
    >
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'TAREFAS',
          tabBarIcon: ({ color }) => (
            <CheckSquare size={24} color={color} strokeWidth={2.25} />
          ),
        }}
      />
    </Tabs>
  )
}
