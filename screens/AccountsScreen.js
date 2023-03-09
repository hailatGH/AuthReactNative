import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { useUser } from "../context";

export default function AccountsScreen() {
  const navigation = useNavigation();
  const user = useUser();

  const handleLogout = async () => {
    if (GoogleSignin.isSignedIn) GoogleSignin.revokeAccess;
    await auth()
      .signOut()
      .then(() => navigation.replace("Auth"))
      .catch((error) => console.log(error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity
          style={styles.backArrowWraper}
          onPress={() => navigation.navigate("Details")}
        >
          <MaterialIcons name="navigate-before" size={32} color="#BEBEBE" />
        </TouchableOpacity>
        <Text style={styles.headTitle}>Settings & Account</Text>
      </View>
      <View style={styles.headingWraper}>
        <View style={styles.profileWraper}>
          <View style={styles.imageWraper}>
            {user?.photoURL && (
              <Image style={styles.image} source={{ uri: user.photoURL }} />
            )}
          </View>
          <View style={styles.userInfoWraper}>
            {user?.displayName && (
              <Text style={styles.userName}>{user.displayName}</Text>
            )}

            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutWraper} onPress={handleLogout}>
          <MaterialIcons name="logout" size={28} color="#BEBEBE" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  head: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  backArrowWraper: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#BEBEBE",
  },
  headTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginLeft: 20,
  },
  headingWraper: {
    flexDirection: "row",
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 50,
    paddingRight: 20,
  },
  profileWraper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  imageWraper: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userInfoWraper: {},
  userName: {
    fontSize: 20,
    fontWeight: 500,
  },
  userEmail: {},
  logoutWraper: {},
});
