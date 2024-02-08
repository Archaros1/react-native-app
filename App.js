import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './components/Tabs';
import { CounterProvider } from './components/CounterProvider';

export default function App() {
  return (
    <NavigationContainer>
      <CounterProvider>
        <Tabs />
      </CounterProvider>
    </NavigationContainer>
  );
}
