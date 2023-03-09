import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// import auth from "@react-native-firebase/auth";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // const handleRegisterBtn = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       console.log("User account created & signed in!");
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/email-already-in-use") {
  //         console.log("That email address is already in use!");
  //       }

  //       if (error.code === "auth/invalid-email") {
  //         console.log("That email address is invalid!");
  //       }

  //       console.error(error);
  //     });
  // };

  const handleGoogleBtn = () => {
    console.log("Google");
  };

  const handleFacebookBtn = () => {
    console.log("Facebook");
  };

  const handlePhoneBtn = () => {
    console.log("Phone");
  };

  const handleLogInBtn = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.pageHeader}>SIGN UP</Text>
      <View style={styles.textInputWraper}>
        <TextInput
          style={styles.textInput}
          placeholder="Email or Username"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.loginBtnWraper}
          onPress={handleRegisterBtn}
        >
          <Text style={styles.loginBtnText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socailAuthWraper}>
        <TouchableOpacity onPress={handleGoogleBtn}>
          <Image
            style={styles.socailBtn}
            source={require("../assets/google-logo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFacebookBtn}>
          <Image
            style={styles.socailBtn}
            source={require("../assets/facebook-logo.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePhoneBtn}>
          <Image
            style={styles.socailBtn}
            source={require("../assets/phone-flat.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.infoText}>
        Already have an account?{" "}
        <Text style={styles.infoSubText} onPress={handleLogInBtn}>
          SIGN IN
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageHeader: {
    fontWeight: "900",
    fontSize: 30,
    marginBottom: 20,
  },
  textInputWraper: {
    width: "80%",
  },
  textInput: {
    textAlign: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "#BEBEBE",
    borderRadius: 5,
    marginVertical: 5,
    fontSize: 16,
  },
  loginBtnWraper: {
    height: 40,
    backgroundColor: "#BEBEBE",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BEBEBE",
    borderRadius: 5,
  },
  loginBtnText: {
    fontWeight: 600,
    fontSize: 18,
  },
  socailAuthWraper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
  socailBtn: {
    width: 50,
    height: 50,
  },
  infoText: {
    marginTop: 20,
  },
  infoSubText: {
    color: "#6464FF",
    fontWeight: 900,
  },
});
