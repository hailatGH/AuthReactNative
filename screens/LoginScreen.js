import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useUser, useUpdateUser } from "../context";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [initializing, setInitializing] = useState(true);

  const navigation = useNavigation();
  const user = useUser();
  const setUser = useUpdateUser();

  GoogleSignin.configure({
    webClientId:
      "141230385652-tlno577ic8395cjhbv21pbunm9g82kjl.apps.googleusercontent.com",
  });

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user) navigation.replace("Main");
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleLoginBtn = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail();
          setPassword();
          // navigation.replace("Main");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }

          console.error(error);
        });
    } else {
      console.log("Credentilas Not Provided");
    }
  };

  const handleGoogleBtn = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then(() => {
        console.log("Logged IN");
        // navigation.replace("Main");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookBtn = async () => {
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };

  const handlePhoneBtn = () => {
    console.log("Phone");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.pageHeader}>SIGN IN</Text>
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

        <TouchableOpacity
          onPress={() =>
            handleFacebookBtn()
              .then(() => console.log("Signed in with Facebook!"))
              .catch(() => console.log("Error"))
          }
        >
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
        <Text
          style={styles.infoSubText}
          onPress={() => navigation.navigate("Register")}
        >
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
