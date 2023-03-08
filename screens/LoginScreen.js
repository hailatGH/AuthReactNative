import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLoginBtn = () => {
    console.log(email);
    console.log(password);
  };

  const handleGoogleBtn = () => {
    console.log("Google");
  };

  const handleFacebookBtn = () => {
    console.log("Facebook");
  };

  const handlePhoneBtn = () => {
    console.log("Phone");
  };

  const handleRegisterBtn = () => {
    console.log("Register");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.pageHeader}>WELCOME</Text>
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
        <TouchableOpacity
          style={styles.loginBtnWraper}
          onPress={handleLoginBtn}
        >
          <Text style={styles.loginBtnText}>LOG IN</Text>
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
        Don't have an account?{" "}
        <Text style={styles.infoSubText} onPress={handleRegisterBtn}>
          REGISTER
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
    fontWeight: 900,
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
