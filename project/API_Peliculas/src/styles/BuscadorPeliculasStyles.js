import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  input: {
    width: 300,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
  },
  movieList: {
    marginTop: 20,
  },
  movieCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    marginBottom: 20,
  },
  movieImage: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  movieTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  boton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBoton: {
    color: "#ffffff",
    fontSize: 16,
  },
});
