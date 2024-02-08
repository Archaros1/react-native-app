import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";


function Settings() {
  const route = useRoute();
  // or
  const {params} = useRoute();

  return (
    <View>
      <Text>
        Settings {route.params.count}
        {/* or */}
        Settings {params.count}
      </Text>
    </View>
  );
}

export { Settings };