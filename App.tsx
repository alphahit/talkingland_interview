/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar,  useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AppContent from './src/home/AppContent';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}




export default App;
