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
import { BackGround } from "../styles/animations/BackGround";
import {
  NativeBaseProvider,
  Box,
  Input,
  Center,
  Alert as NbAlert,
  VStack,
  HStack,
  Text as NbText,
  IconButton,
  CloseIcon,
  Button,
} from "native-base";

export const RegisterScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
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
      setShowAlert(true);
      // navigation.navigate("login");
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
    <NativeBaseProvider>
      <View style={styles.container}>
        {showAlert && (
          <Center style={styles.overlay}>
            <NbAlert w="90%" maxW="400" status="info" colorScheme="info">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack
                  flexShrink={1}
                  space={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <HStack flexShrink={1} space={2} alignItems="center">
                    <NbAlert.Icon />
                    <NbText
                      fontSize="md"
                      fontWeight="medium"
                      color="coolGray.800"
                    >
                      ¡Registro exitoso! Verifica tu correo.
                    </NbText>
                  </HStack>
                  <IconButton
                    onPress={() => {
                      setShowAlert(false);
                      navigation.navigate("login");
                    }}
                    variant="unstyled"
                    icon={<CloseIcon size="3" />}
                    _icon={{
                      color: "coolGray.600",
                    }}
                  />
                </HStack>
                <Box
                  pl="6"
                  _text={{
                    color: "coolGray.600",
                  }}
                >
                  Por favor, revisa tu correo electrónico para activar tu
                  cuenta.
                </Box>
              </VStack>
            </NbAlert>
          </Center>
        )}
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

        <Box style={styles.inputContainer}>
          <Box style={styles.icon1Container}>
            <FontAwesome name="user-circle" size={30} color="#9993FF" />
          </Box>
          <Input
            w="100%"
            size="md"
            variant="rounded"
            pl="12"
            color="white"
            placeholderTextColor="#ccc"
            placeholder="Nombre"
            onChangeText={(value) => handleInputChange("name", value)}
            value={user.name}
          />
        </Box>

        <Box style={styles.inputContainer}>
          <Box style={styles.icon1Container}>
            <MaterialIcons name="email" size={30} color="#9993FF" />
          </Box>
          <Input
            w="100%"
            size="md"
            variant="rounded"
            pl="12"
            color="white"
            placeholderTextColor="#ccc"
            placeholder="Correo"
            onChangeText={(value) => handleInputChange("email", value)}
            value={user.email}
          />
        </Box>

        <Box style={styles.inputContainer}>
          <Box style={styles.icon1Container}>
            <MaterialIcons name="password" size={30} color="#9993FF" />
          </Box>
          <Input
            w="100%"
            size="md"
            variant="rounded"
            pl="12"
            color="white"
            placeholderTextColor="#ccc"
            placeholder="Contraseña"
            secureTextEntry={hidePassword}
            onChangeText={(value) => handleInputChange("password", value)}
            value={user.password}
          />
          <Box style={styles.icon2Container}>
            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassword)}
              style={styles.icon}
            >
              <Ionicons
                name={hidePassword ? "eye-off" : "eye"}
                size={24}
                color="#9993FF"
              />
            </TouchableOpacity>
          </Box>
        </Box>

        <Box style={styles.inputContainer}>
          <Box style={styles.icon1Container}>
            <MaterialIcons name="password" size={30} color="#9993FF" />
          </Box>
          <Input
            w="100%"
            size="md"
            variant="rounded"
            pl="12"
            color="white"
            placeholderTextColor="#ccc"
            placeholder="Contraseña"
            secureTextEntry={hidePassword2}
            onChangeText={(value) => handleInputChange("password2", value)}
            value={user.password2}
          />
          <Box style={styles.icon2Container}>
            <TouchableOpacity
              onPress={() => setHidePassword2(!hidePassword2)}
              style={styles.icon}
            >
              <Ionicons
                name={hidePassword2 ? "eye-off" : "eye"}
                size={24}
                color="#9993FF"
              />
            </TouchableOpacity>
          </Box>
        </Box>

        <Button
          onPress={saveUser}
          bg="#6C63FF"
          _text={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
          _pressed={{
            bg: "#4F45FF",
          }}
          borderRadius="full"
          height={50}
          width="75%"
          marginTop={3}
        >
          Registrarse
        </Button>
      </View>
    </NativeBaseProvider>
  );
};
