import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../context/AuthContext";
import {
  NativeBaseProvider,
  Box,
  Button,
  VStack,
  HStack,
  Avatar,
  Center,
  Icon,
  Divider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await logout();
    navigation.navigate("login");
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} p={4} w="100%" mx="auto">
        <Center>
          <Avatar
            size="2xl"
            source={{
              uri:
                user?.avatar ||
                "https://imgs.search.brave.com/2iaviiD3ChPOEL9LVEVEQIMy0Yuu1eCTJqvHYgh_EQE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJlbnNhbGlicmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAxL2xhLXJv/Y2EtMDIucG5nP3F1/YWxpdHk9NTI",
            }}
            reziseMode="contain"
          >
            {user?.name?.[0]}
          </Avatar>
          <Text fontSize="xl" mt={2} bold>
            Bienvenido {user?.name || "Nombre no disponible"}
          </Text>
          <Text fontSize="md" color="gray.500">
            Correo:{user?.email}
          </Text>
        </Center>

        <VStack space={4} mt={5}>
          <Box>
            <Text fontSize="lg" bold>
              Estadísticas
            </Text>
            <HStack space={3} justifyContent="space-around">
              <Box>
                <Text fontSize="lg" bold>
                  Series Favoritas
                </Text>
                <Text fontSize="md">{0}</Text>
              </Box>
              <Box>
                <Text fontSize="lg" bold>
                  Películas Favoritas
                </Text>
                <Text fontSize="md">{0}</Text>
              </Box>
              <Box>
                <Text fontSize="lg" bold>
                  Actores Favoritos
                </Text>
                <Text fontSize="md">{0}</Text>
              </Box>
            </HStack>
          </Box>

          <Button mt={3} colorScheme="primary">
            Ver Historial
          </Button>
        </VStack>

        <Divider my="5" />

        <Center>
          <Button
            size="lg"
            colorScheme="secondary"
            leftIcon={<Icon as={MaterialIcons} name="logout" size="lg" />}
            onPress={handleLogout}
          >
            Cerrar Sesión
          </Button>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};
