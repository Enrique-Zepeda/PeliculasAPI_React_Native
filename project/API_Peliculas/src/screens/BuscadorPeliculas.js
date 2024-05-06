import React, { useState } from "react";
import { View, TouchableOpacity, Text, FlatList, Image } from "react-native";
import { styles } from "../styles/BuscadorPeliculasStyles";
import { useNavigation } from "@react-navigation/native";
import { NativeBaseProvider, Box, Input, Button, Heading } from "native-base";
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
        <BackGround />
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
            placeholderTextColor="#ccc"
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
            <View style={styles.movieCard}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.movieImage}
              />
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text>{item.overview}</Text>
            </View>
          )}
          style={styles.movieList}
        />
      </View>
    </NativeBaseProvider>
  );
};
