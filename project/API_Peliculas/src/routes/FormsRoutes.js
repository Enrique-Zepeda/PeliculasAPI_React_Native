import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { BuscadorPeliculas } from "../components/BuscadorPeliculas";
import { AuthProvider } from "../context/AuthContext";
import { SuccessAnimationScreen } from "../styles/animations/SuccessAnimationScreen";
import { BackGround } from "../styles/animations/BackGround";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function PerfilUsuario() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Perfil Usuario</Text>
    </View>
  );
}

export function Configuracion() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Configuración</Text>
    </View>
  );
}

function MenuHamburguesa() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="PerfilUsuario" component={PerfilUsuario} />
      <Drawer.Screen name="Configuracion" component={Configuracion} />
      {/* Aquí puedes agregar más pantallas según necesites */}
    </Drawer.Navigator>
  );
}

export const FormsRoutes = () => {
  return (
    <AuthProvider>
      <BackGround />
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="search"
          component={BuscadorPeliculas} // Asegúrate que este componente ya está adaptado para ser un Drawer
          options={{
            headerStyle: {
              backgroundColor: "#222",
            },
            headerShown: false,
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="SuccessAnimation"
          component={SuccessAnimationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
