import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen.js";
import { createStackNavigator } from "@react-navigation/stack";
import { BuscadorPeliculas } from "../components/BuscadorPeliculas.js";
import { AuthProvider } from "../context/AuthContext.js";
import { BackGround } from "../styles/animations/BackGround.js";
import { SuccessAnimationScreen } from "../styles/animations/SuccessAnimationScreen.js";
// import DrawerMenu from "./DrawerMenu.js";
const Stack = createStackNavigator();

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
          component={BuscadorPeliculas}
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
