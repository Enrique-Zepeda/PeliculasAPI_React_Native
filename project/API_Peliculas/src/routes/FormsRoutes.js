import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen.js";
import { createStackNavigator } from "@react-navigation/stack";
import { BuscadorPeliculas } from "../components/BuscadorPeliculas.js";

const Stack = createStackNavigator();

export const FormsRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        options={{ title: "Iniciar Sesión" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{ title: "Registrarse" }}
        component={RegisterScreen}
      />
      <Stack.Screen name="Serch" component={BuscadorPeliculas} />
      {/*en la version 3 tendremos que llamar a este componenre HomeScren y desde ahi crear un drawer para la creacion de los demas tabs ahoria por default solo navega al buscador de peliculas  */}
    </Stack.Navigator>
  );
};
