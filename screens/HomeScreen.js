import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapshot) => {
            //  console.log(snapshot.data());
            const data = snapshot.data();
            setUsername(data.username);
            setEmail(data.email);
            setFirstname(data.firstname);
            setSurname(data.surname);
          });
      }
    });
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.replace("LoginScreen");
    });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text style={styles.enhance}>{`${username}`}</Text>
      <Text>You've succsessfuly registered with the email</Text>
      <Text style={styles.enhance}>{`${email}`}</Text>
      <Text>{`Ww will keep the name ${firstname} ${surname} as a secret`}</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  enhance: {
    fontWeight: "700",
  },
  signOutButton: {
    width: "40%",
    alignItems: "center",
    margin: 30,
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "black",
    backgroundColor: "white",
  },
  signOutButtonText: { fontWeight: "bold" },
});
