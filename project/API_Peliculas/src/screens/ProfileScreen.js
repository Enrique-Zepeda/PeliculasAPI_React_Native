import React, { useState, useRef } from "react";
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
  AlertDialog,
  Text,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  const handleLogout = async () => {
    await logout();
    navigation.navigate("login");
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} p={4} w="100%" mx="auto" backgroundColor="#333333">
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
          <Text fontSize="lg" mt={2} bold color="white">
            Bienvenido {user?.name || "Nombre no disponible"}
          </Text>
          <Text fontSize="md" color="gray.500">
            Correo:{user?.email}
          </Text>
        </Center>

        <VStack space={4} mt={5}>
          <Box>
            <Text fontSize="lg" bold color="white" marginBottom={3}>
              Estadísticas
            </Text>
            <HStack space={3} justifyContent="space-around">
              <Box>
                <Text fontSize="sm" bold color="gray.400">
                  Películas Favoritas
                </Text>
                <Text fontSize="md" color="blue.300">
                  {5}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" bold color="gray.400">
                  Series Favoritas
                </Text>
                <Text fontSize="md" color="blue.300">
                  {8}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm" bold color="gray.400">
                  Actores Favoritos
                </Text>
                <Text fontSize="md" color="blue.300">
                  {3}
                </Text>
              </Box>
            </HStack>
          </Box>

          <Button mt={3} colorScheme="primary">
            <Text fontSize="lg" bold color="white">
              Historial
            </Text>
          </Button>
        </VStack>

        <Divider my="5" />

        <Center>
          <Button
            size="lg"
            colorScheme="secondary"
            leftIcon={<Icon as={MaterialIcons} name="logout" size="lg" />}
            onPress={() => setIsOpen(!isOpen)}
          >
            Cerrar Sesión
          </Button>
          <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <AlertDialog.Content style={{ backgroundColor: "#222" }}>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Cerrar Sesión</AlertDialog.Header>
              <AlertDialog.Body>
                Estás seguro que deseas cerrar sesión?
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    Cancel
                  </Button>
                  <Button colorScheme="danger" onPress={handleLogout}>
                    Cerrar sesión
                  </Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
};
