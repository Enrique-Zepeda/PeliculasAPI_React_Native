import React, { useState } from "react";
import { View, Text, TextInput, Image, Pressable } from "react-native";
import { Validaciones } from "../components/Validaciones";
import { styles } from "../styles/LoginScreenStyles";
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
    if (!user.email || !user.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
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

      {error && <Validaciones message={error} />}

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
