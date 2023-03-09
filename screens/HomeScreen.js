import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headTitle}>HomeScreen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Details")}
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
