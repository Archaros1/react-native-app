import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from './Title';
import { useState } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCounterValue } from './CounterProvider';

function Home() {
  const [color, setColor] = useState('purple');
  const [colorBack, setColorBack] = useState('blue');
  const [count, setCount] = useState(5);
  const globalCount = useCounterValue();

  const navigation = useNavigation();

  return (
      <View style={[styles.container, {
        backgroundColor: colorBack,
      }]}>
        <Title name="Arthur" color={color} />
        <Title name={count} />
        <Title name={globalCount} color="brown" />
        <Button
          onPress={() => {
            setColor(color === "purple" ? "green" : "purple");
            setColorBack(colorBack === "red" ? "blue" : "red");
            setCount(count + 1);
          }}
          title="Changer couleur"
        />
        <Button
          onPress={() => {
            navigation.navigate("Settings", {
              count
            });
          }}
          title="Changer d'onglet"
        />
        <Text>Open up App.js to start working on your app! test</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf1fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Home };