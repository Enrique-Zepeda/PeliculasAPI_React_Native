import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Validaciones } from "../components/Validaciones";
import { styles } from "../styles/RegisterScreenStyles";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { BackGround } from "../styles/BackGround";

export const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
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
    if (user.password !== user.password2) {
      setError("Las contraseñas no coinciden.");
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
      if (error.code === "auth/email-already-in-use") {
        setError("El correo ya esta en uso");
      }
    }
  };

  return (
    <View style={styles.container}>
      <BackGround />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Ionicons
            name="chevron-back"
            size={40}
            color="black"
            style={styles.headerShown}
          />
        </TouchableOpacity>
      </View>
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
      <View style={styles.inputContainer}>
        <FontAwesome
          name="user-circle"
          size={30}
          color="#6C63FF"
          style={styles.icon1}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(value) => handleInputChange("name", value)}
          value={user.name}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={30}
          color="#6C63FF"
          style={styles.icon1}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(value) => handleInputChange("email", value)}
          value={user.email}
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="password"
          size={30}
          color="#6C63FF"
          style={styles.icon1}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={hidePassword}
          onChangeText={(value) => handleInputChange("password", value)}
          value={user.password}
        />
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.icon}
        >
          <Ionicons
            name={hidePassword ? "eye-off" : "eye"}
            size={24}
            color="#6C63FF"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="password"
          size={30}
          color="#6C63FF"
          style={styles.icon1}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={hidePassword2}
          onChangeText={(value) => handleInputChange("password2", value)}
          value={user.password2}
        />
        <TouchableOpacity
          onPress={() => setHidePassword2(!hidePassword2)}
          style={styles.icon}
        >
          <Ionicons
            name={hidePassword2 ? "eye-off" : "eye"}
            size={24}
            color="#6C63FF"
          />
        </TouchableOpacity>
      </View>
      <Pressable style={styles.button} onPress={saveUser}>
        <Text style={styles.textPressable}>Registrarse</Text>
      </Pressable>
    </View>
  );
};
