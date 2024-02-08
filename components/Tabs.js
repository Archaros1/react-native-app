import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Epilepsie } from "./Epilepsie";
import { Home } from './Home';
import { Settings } from './Settings';

function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Test" component={Epilepsie} />
    </Tab.Navigator>
  );
}

export { Tabs };
