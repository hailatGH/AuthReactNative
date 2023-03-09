import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialIcons name="navigate-before" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.headTitle}>DetailsScreen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Accounts")}
      >
        <MaterialIcons name="navigate-next" size={32} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  headTitle: {
    fontSize: 24,
    fontWeight: 500,
  },
  btn: {},
});
