import { useState } from "react";

import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { auth, db } from "../firebase";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [mobile, setMobile] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isOnline, setIsOnline] = useState(false);

  const handleCreateAccount = () => {
    auth.createUserWithEmailAndPassword(email, password).catch((err) => {});
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        db.collection("users").doc(uid).set({
          username,
          email,
          firstname,
          surname,
          mobile,
          location: { latitude, longitude },
          isOnline,
        });
      }
    });

    navigation.navigate("HomeScreen");
  };

  const handleBackToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          onChangeText={(typedText) => setUsername(typedText)}
          style={styles.input}
        />
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
        <TextInput
          placeholder="First Name"
          onChangeText={(typedText) => setFirstname(typedText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Surname"
          onChangeText={(typedText) => setSurname(typedText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Mobile"
          onChangeText={(typedText) => setMobile(typedText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Latitude"
          onChangeText={(typedText) => setLatitude(typedText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Longitude"
          onChangeText={(typedText) => setLongitude(typedText)}
          style={styles.input}
        />
        <TextInput
          placeholder="Status"
          onChangeText={(typedText) => setIsOnline(typedText)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleCreateAccount} style={styles.buttons}>
          <Text style={styles.loginButtonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleBackToLogin}
          style={[styles.buttons, styles.registerButton]}
        >
          <Text style={styles.registerButtonText}>Back to Login</Text>
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
    marginBottom: 10,
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
