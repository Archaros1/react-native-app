import { Text } from 'react-native';

function Title({ name, color="red", colorBack="white" }) {
  return (
    <Text style={{ color, backgroundColor: colorBack }}>Hello, {name}</Text>
  );
}

export { Title };