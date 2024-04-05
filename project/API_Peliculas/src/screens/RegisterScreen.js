import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { Validaciones } from "../components/Validaciones";
import { styles } from "../styles/RegisterScreenStyles";
import { useAuth } from "../context/AuthContext";

export const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { signup } = useAuth();

  const handleInputChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const saveUser = async () => {
    setError("");
    if (!user.name || !user.email || !user.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (user.name.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(user.name)) {
      setError("El nombre solo puede contener letras.");
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(user.name)) {
      setError("El nombre solo puede contener letras.");
      return;
    }
    if (!isValidPassword(user.password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, incluir números y almenos una letra mayúscula."
      );
      return;
    }
    try {
      await signup(user.email, user.password, user.name);
      Alert.alert("Registro exitoso, Verifica tu correo");
      navigation.navigate("login");
    } catch (error) {
      console.error(error);
      setError(error.message);
      if (error.code === "auth/missing-password") {
        setError("Contraseña vacia");
      }
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
      if (error.code === "auth/missing-email") {
        setError("Email vacio");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe contener almenos 6 caracteres");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta en uso");
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
      <Text style={styles.title}>Registrarse</Text>
      {error && <Validaciones message={error} />}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(value) => handleInputChange("name", value)}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        onChangeText={(value) => handleInputChange("email", value)}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(value) => handleInputChange("password", value)}
        value={user.password}
      />
      <Pressable style={styles.button} onPress={saveUser}>
        <Text style={styles.textPressable}>Registrarse</Text>
      </Pressable>
    </View>
  );
};
