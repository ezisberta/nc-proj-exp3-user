import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.replace("HomeScreen");
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  const handleLogin = () => {
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={(typedText) => setEmail(typedText)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          onChangeText={(typedText) => setPassword(typedText)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.buttons}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.buttons, styles.registerButton]}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    alignItems: "center",
    padding: 15,
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "white",
  },
  registerButton: { marginTop: 10, backgroundColor: "grey" },
  loginButtonText: { fontWeight: "bold" },

  registerButtonText: { fontWeight: "bold", color: "white" },
});

// const handleRegister = () => {
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((credentials) => {})
//     .catch((err) => {
//       console.log(err);
//     });
// };
