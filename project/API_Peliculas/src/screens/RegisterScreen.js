import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
//importar firebase
import appFirebase from "../../credenciales";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

export const RegisterScreen = ({ navigation }) => {
  const initialState = {
    //objeto
    name: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const handleInput = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  const saveUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      console.log(user);

      await addDoc(collection(db, "Users"), {
        uid: user.uid,
        name: form.name,
        email: form.email,
      });

      Alert.alert("Registro exitoso");
      navigation.navigate("login");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ha ocurrido un error durante el registro");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://filmapp.app/wp-content/uploads/2022/09/film-app-apk.png",
          }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(value) => handleInput(value, "name")}
        value={form.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        onChangeText={(value) => handleInput(value, "email")}
        value={form.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(value) => handleInput(value, "password")}
        value={form.password}
      />
      <Pressable style={styles.button} onPress={saveUser}>
        <Text style={styles.textPressable}>Registrarse</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252222",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  textPressable: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: "#636363",
    elevation: 2,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
    elevation: 3,
  },
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    paddingRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 50,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#FFFFFF",
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoApp: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
