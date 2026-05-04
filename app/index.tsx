import { Redirect } from 'expo-router'
import '../assets/css/global.css'

export default function Home() {
  return <Redirect href="/(tabs)/tasks" />
}
