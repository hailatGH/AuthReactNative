import { View, Text, StyleSheet } from "react-native";

import { LoginScreen, RegisterScreen } from "./screens";

export default function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, Image, Button } from "react-native";
// import "expo-dev-client";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
// } from "@react-native-google-signin/google-signin";

// import auth from "@react-native-firebase/auth";

// import Header from "./Header";

// export default function App() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   GoogleSignin.configure({
//     webClientId:
//       "141230385652-tlno577ic8395cjhbv21pbunm9g82kjl.apps.googleusercontent.com",
//   });

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   const onGoogleButtonPress = async () => {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     const user_sign_in = auth().signInWithCredential(googleCredential);
//     user_sign_in
//       .then((user) => {
//         // console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await auth().signOut();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View style={styles.container}>
//         <Header />
//         <GoogleSigninButton
//           style={{ width: 300, height: 65, marginTop: 300 }}
//           onPress={onGoogleButtonPress}
//         />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={{ marginTop: 100, alignItems: "center" }}>
//         <Text style={{ fontWeight: "bold", fontSize: 23 }}>
//           Welcome, {user.displayName}
//         </Text>
//         <Image
//           source={{ uri: user.photoURL }}
//           style={{ height: 300, width: 300, borderRadius: 150, margin: 50 }}
//         />
//         <Button title="Sign Out" onPress={signOut} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
