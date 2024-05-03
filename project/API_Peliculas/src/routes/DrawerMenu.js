import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BuscadorPeliculas } from "../components/BuscadorPeliculas";
import { ProfileScreen } from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator initialRouteName="BuscadorPeliculas">
      <Drawer.Screen name="BuscadorPeliculas" component={BuscadorPeliculas} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
