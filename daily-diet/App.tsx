import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from "styled-components"
import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })
  return (
    <ThemeProvider theme={theme} >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Routes /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}