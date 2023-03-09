import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, AccountsScreen, DetailsScreen } from "../screens";

const Stack = createNativeStackNavigator();

export default function MainScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Accounts" component={AccountsScreen} />
    </Stack.Navigator>
  );
}
