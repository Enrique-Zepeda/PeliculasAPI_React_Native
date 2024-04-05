import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { useAuth } from "../context/AuthContext";
export const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async () => {
    setError("");
    try {
      await login(user.email, user.password);
      navigation.navigate("search");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/missing-password") {
        setError("Porfavor ingresa tu contraseña");
      }
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/missing-email") {
        setError("Porfavor ingresa un correo");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener almenos 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta en uso");
      }
      if (error.code === "auth/invalid-credential") {
        setError("Credenciales invalidas");
      }
      if (error.code === "auth/too-many-requests") {
        setError("Demasiados intenos ¿Olvidaste la contraseña?");
      }
      if (error.message === "auth/email-verification") {
        setError("Verifica tu correo");
      }
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
      <Text style={styles.title}>Inicio de Sesion</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        onChangeText={(value) => handleChange("email", value)}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(value) => handleChange("password", value)}
        value={user.password}
      />
      {/* En la version 3 tendremos que llamar a este navigate HomeScreen */}
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textPressable}>Iniciar Sesion</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
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
