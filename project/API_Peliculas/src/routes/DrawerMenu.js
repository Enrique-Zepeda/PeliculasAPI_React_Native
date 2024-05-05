import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NativeBaseProvider, Box, Text, Icon, HStack } from "native-base";
import LottieView from "lottie-react-native";
import { BuscadorPeliculas } from "../components/BuscadorPeliculas";
import { ProfileScreen } from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { DrawerBackGround } from "../styles/animations/DrawerBackGround";

const CustomDrawerContent = (props) => {
  const { user } = useAuth();
  return (
    <NativeBaseProvider>
      <View style={styles.drawerContainer}>
        <DrawerBackGround />
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
          <Box style={styles.welcomeHeader}>
            <Text color="white" fontSize="lg" bold mt="-20">
              Bienvenido, {user?.name || "Usuario"}
            </Text>
          </Box>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    overflow: "hidden", // Esto asegura que el contenido que se desborde no sea visible
  },
  drawerBackground: {
    flex: 1,
    backgroundColor: "transparent",
  },
  drawerHeader: {
    height: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeHeader: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 53,
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
            drawerLabel: () => (
              <HStack space={3} alignItems="center">
                <Text color="white">Buscar Películas</Text>
              </HStack>
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
