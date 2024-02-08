import { useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { useCounterValue, useResetCounterValue } from './CounterProvider';

function Settings() {
  const route = useRoute();
  // or
  const { params } = useRoute();

  const count = useCounterValue();
  const resetCount = useResetCounterValue();

  return (
    <View style={[styles.container]}>
      <Text>
        Settings {route?.params?.count}
        {/* or */}
        Settings {params?.count}

        Count : {count}
      </Text>
      <Button
          onPress={() => {
            resetCount();
          }}
          title="Reset counter"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Settings };