import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "styled-components"
import { Home } from './src/screens/Home';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme} >

      { fontsLoaded ? <Home /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}