import React from "react";
import { StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Box, Icon, NativeBaseProvider } from "native-base";
import LottieView from "lottie-react-native";
import { BuscadorPeliculas } from "../components/BuscadorPeliculas";
import { ProfileScreen } from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  return (
    <NativeBaseProvider>
      <DrawerContentScrollView {...props} style={styles.drawerBackground}>
        <Box style={styles.drawerHeader}>
          <LottieView
            source={{
              uri: "https://lottie.host/f2229f7b-d624-416e-a146-b820b40d4908/yvDgucEKn5.json",
            }}
            autoPlay
            loop
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  drawerBackground: {
    backgroundColor: "#1f2937",
  },
  drawerHeader: {
    height: 130,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <NativeBaseProvider>
      <Drawer.Navigator
        initialRouteName="BuscadorPeliculas"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="BuscadorPeliculas"
          component={BuscadorPeliculas}
          options={{
            drawerIcon: () => (
              <Icon
                as={Ionicons}
                name="film-outline"
                color="#9993FF"
                size={30}
              />
            ),
            drawerLabelStyle: {
              color: "#FFFFFF",
            },
          }}
        />
        <Drawer.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            drawerIcon: () => (
              <Icon
                as={Ionicons}
                name="person-outline"
                color="#9993FF"
                size={30}
              />
            ),
            drawerLabelStyle: {
              color: "#FFFFFF",
            },
          }}
        />
      </Drawer.Navigator>
    </NativeBaseProvider>
  );
};

export default DrawerMenu;
