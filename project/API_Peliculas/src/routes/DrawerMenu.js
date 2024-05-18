import React from "react";
import { View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NativeBaseProvider, Box, Text, Icon, HStack } from "native-base";
import LottieView from "lottie-react-native";
import { BuscadorPeliculas } from "../screens/BuscadorPeliculas";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { DrawerBackGround } from "../styles/animations/DrawerBackGround";
import { styles } from "../styles/DrawerStyles";
import { BuscadorSeries } from "../screens/BuscadorSeries";
import { BuscadorActores } from "../screens/BuscadorActores";

const CustomDrawerContent = (props) => {
  const { user } = useAuth();
  const { navigation } = props;
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
            <Text color="white" fontSize="2xl" bold mt="-20">
              Bienvenido, {user?.name || "Usuario"}
            </Text>
          </Box>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <Box
          borderColor="#eee"
          borderRadius="full"
          bg="transparent"
          m={2}
          p={2}
        >
          <DrawerItem
            label="Usuario"
            icon={() => (
              <Icon as={Ionicons} name="person" color="#9993FF" size={50} />
            )}
            onPress={() => navigation.navigate("Perfil")}
            labelStyle={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          />
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <NativeBaseProvider>
      <Drawer.Navigator
        initialRouteName="BuscadorPeliculas"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerType="slide"
        overlayColor="transparent"
      >
        <Drawer.Screen
          name="BuscadorPeliculas"
          component={BuscadorPeliculas}
          options={{
            headerShown: false,
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
          name="BuscadorSeries"
          component={BuscadorSeries}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <Icon as={Ionicons} name="tv-outline" color="#9993FF" size={30} />
            ),
            drawerLabel: () => (
              <HStack space={3} alignItems="center">
                <Text color="white">Buscar Series</Text>
              </HStack>
            ),
            drawerLabelStyle: {
              color: "#FFFFFF",
            },
          }}
        />
        <Drawer.Screen
          name="BuscadorActores"
          component={BuscadorActores}
          options={{
            headerShown: false,
            drawerIcon: () => (
              <Icon as={FontAwesome} name="users" color="#9993FF" size={30} />
            ),
            drawerLabel: () => (
              <HStack space={5} alignItems="center">
                <Text color="white">Buscar Actores</Text>
              </HStack>
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
