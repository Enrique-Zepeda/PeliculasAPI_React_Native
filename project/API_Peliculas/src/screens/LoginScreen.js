import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
// import { AnimatedButton } from "../components/AnimatedPressable";
import { Validaciones } from "../components/Validaciones";
import { styles } from "../styles/LoginScreenStyles";
import { useAuth } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
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

export const LoginScreen = ({ navigation }) => {
  const { login, resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [hidePassword, setHidePassword] = useState(true);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const recoveryPassword = async () => {
    if (!user.email) {
      setError("Ingrese un correo para restablecer la contraseña");
      return;
    }
    try {
      resetPassword(user.email);
      setShowAlert(true);
      setError("");
    } catch (error) {
      console.log(Error.code);
    }
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    if (!user.email || !user.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    try {
      await login(user.email, user.password);
      setLoading(false);
      navigation.navigate("SuccessAnimation");
    } catch (error) {
      console.log(error.code);
      setLoading(false);
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
        setError("Demasiados intentos ¿Olvidaste la contraseña?");
      }
      if (error.message === "auth/email-verification") {
        setError("Verifica tu correo");
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
                      Correo de recuperación enviado
                    </NbText>
                  </HStack>
                  <IconButton
                    onPress={() => {
                      setShowAlert(false);
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
                  Por favor, revisa tu correo electrónico para restablecer tu
                  contraseña.
                </Box>
              </VStack>
            </NbAlert>
          </Center>
        )}
        <BackGround />
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
        <Box style={styles.inputContainer}>
          <Box style={styles.icon1Container}>
            <MaterialIcons name="email" size={30} color="#9993FF" />
          </Box>
          <Input
            w="100%"
            size="md"
            variant="rounded"
            placeholder="Correo"
            pl="12"
            color="white"
            placeholderTextColor="#ccc"
            onChangeText={(value) => handleChange("email", value)}
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
            placeholder="Contraseña"
            pl="12"
            color="white"
            placeholderTextColor="#ccc"
            secureTextEntry={hidePassword}
            onChangeText={(value) => handleChange("password", value)}
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
        <View style={styles.passwordContainer}>
          <Text style={styles.resetText} onPress={recoveryPassword}>
            ¿Olvidaste tu contraseña?
          </Text>
        </View>
        <Button
          onPress={handleLogin}
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
          marginTop={5}
        >
          Iniciar Sesión
        </Button>
        <Button
          onPress={() => navigation.navigate("Register")}
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
          marginTop={5}
        >
          Registrarse
        </Button>
      </View>
    </NativeBaseProvider>
  );
};
