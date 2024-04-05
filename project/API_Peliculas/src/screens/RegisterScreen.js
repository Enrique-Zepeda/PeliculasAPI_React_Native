import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
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

  const saveUser = async () => {
    setError("");
    try {
      await signup(user.email, user.password, user.name);
      Alert.alert("Registro exitoso");
      navigation.navigate("login");
    } catch (error) {
      console.error(error);
      setError(error.message);
      Alert.alert(
        "Error",
        "Ha ocurrido un error durante el registro: " + error.message
      );
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
