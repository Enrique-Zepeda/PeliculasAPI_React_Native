import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { styles } from "../styles/BuscadorPeliculasStyles";
import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  Box,
  Input,
  Button,
  Heading,
  AspectRatio,
  Stack,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { BackGround } from "../styles/animations/BackGroundPeliculas";

export const BuscadorPeliculas = () => {
  const navigation = useNavigation();
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "f2eade83c3c75e944b3a211c852eb69c";

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const handleInputChange = (value) => {
    setBusqueda(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${urlBase}?query=${busqueda}&api_key=${API_KEY}`
      );
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Heading style={styles.title} size={"3xl"}>
          Buscador de Películas
        </Heading>
        <Box style={styles.inputContainer}>
          <Input
            w="100%"
            size="md"
            variant="rounded"
            placeholder="Escribe una película"
            pl="12"
            color="white"
            placeholderTextColor="white"
            bg="#333333"
            onChangeText={handleInputChange}
            value={busqueda}
          />
          <Box style={styles.icon1Container}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Entypo name="menu" size={30} color="#9993FF" />
            </TouchableOpacity>
          </Box>
          <Box style={styles.searchButton}>
            <Button onPress={handleSubmit} borderRadius="full" bg="#6C63FF">
              <Text style={styles.textoBoton}>Buscar</Text>
            </Button>
          </Box>
        </Box>
        <FlatList
          data={peliculas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Box alignItems="center">
              <Box
                maxW="80"
                rounded="xl"
                overflow="hidden"
                borderWidth="0"
                marginTop="2"
                marginBottom="5"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box>
                  <AspectRatio w="100%" ratio={2 / 3}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                      }}
                      alt="image"
                      resizeMode="cover"
                    />
                  </AspectRatio>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {item.title}
                    </Heading>
                  </Stack>
                  <Text fontWeight="400">{item.overview}</Text>
                </Stack>
              </Box>
            </Box>
          )}
        />
      </View>
    </NativeBaseProvider>
  );
};
