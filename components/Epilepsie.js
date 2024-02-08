import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from './Title';
import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { useCounterValue } from './CounterProvider';

function Epilepsie() {
  const [color, setColor] = useState('purple');
  const [colorBack, setColorBack] = useState('purple');

  const count = useCounterValue();

  // When count change, trigger setColor & setColorBack
  useEffect(() => {
    setColor(color === "purple" ? "green" : "purple");
    setColorBack(colorBack === "red" ? "blue" : "red");
  }, [count])

  // "let" instead of "const" means this value is not conserved between renderings. To avoid.
  let rotation = "rotateX("+count+"deg);rotateY("+count+"deg);rotateZ("+count+"deg);";

  return (
    <View style={[styles.container, {
      backgroundColor: colorBack,
      transform: rotation
      }]}>
      <Title name="Arthur" color={color} />
      <Title name={count} />
      <Button
        onPress={() => {
          setColor(color === "purple" ? "green" : "purple");
        }}
        title="Changer couleur"
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

export { Epilepsie };
