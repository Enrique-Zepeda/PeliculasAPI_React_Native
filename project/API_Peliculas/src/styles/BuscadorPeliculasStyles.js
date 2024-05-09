import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: "100%",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  input: {
    width: 300,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: "#333333",
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    height: 50,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 80,
    marginBottom: 15,
  },
  icon1Container: {
    position: "absolute",
    left: 20,
    top: "50%",
    transform: [{ translateY: -15 }],
  },
  searchButton: {
    position: "absolute",
    right: 0,
    top: "39%",
    backgroundColor: "6C63FF",
    transform: [{ translateY: -15 }],
  },
});
