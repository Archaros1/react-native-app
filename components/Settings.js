import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { useCounterValue } from './CounterProvider';


function Settings() {
  const route = useRoute();
  // or
  const { params } = useRoute();

  const count = useCounterValue();

  return (
    <View style={[styles.container]}>
      <Text>
        Settings {route?.params?.count}
        {/* or */}
        Settings {params?.count}

        Count : {count}
      </Text>
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