import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PlusCircle } from "phosphor-react-native"
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor='#0D0D0D'
        translucent
      />
      <Home />
    </>
  );
}
