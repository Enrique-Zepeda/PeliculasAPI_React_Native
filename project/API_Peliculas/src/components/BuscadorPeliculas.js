import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  FlatList,
  Image,
} from "react-native";
import { styles } from "../styles/BuscadorPeliculasStyles";

export const BuscadorPeliculas = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de Películas Prueba</Text>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Escribe una película"
          value={busqueda}
          onChangeText={handleInputChange}
        />
        <Pressable style={styles.boton} onPress={handleSubmit}>
          <Text style={styles.textoBoton}>Buscar</Text>
        </Pressable>
      </View>
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
  );
};
