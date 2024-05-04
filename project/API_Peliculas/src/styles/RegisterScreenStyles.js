import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  headerShown: {
    textAlign: "left",
    marginTop: -75,
    marginLeft: 3,
  },
  headerShown1: {
    fontSize: 30,
    textAlign: "left",
    color: "#FFFFFF",
    marginTop: -50,
    marginLeft: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
    textAlign: "center",
  },
  textPressable: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    width: "75%",
    color: "#FFFFFF",
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: "#636363",
    elevation: 2,
    paddingRight: 50,
  },
  button: {
    width: "83%",
    height: 50,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
    elevation: 3,
  },
  logo: {
    width: 200,
    height: 160,
    marginTop: -50,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#FFFFFF",
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    height: 50,
    width: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 15,
  },
  icon: {
    position: "absolute",
    right: 15, // Asegúrate de que esto alinee el ícono del ojo a la derecha dentro del contenedor
    top: "50%",
    transform: [{ translateY: -12 }], // Ajusta para centrar verticalmente
  },
  icon1Container: {
    position: "absolute",
    left: 63, // Ajusta este valor para mover el ícono de la contraseña más a la izquierda si es necesario
    top: "50%",
    transform: [{ translateY: -15 }], // Ajusta para centrar verticalmente
  },
  icon2Container: {
    position: "absolute",
    right: 45, // Ajusta este valor para mover el ícono de la contraseña más a la izquierda si es necesario
    top: "50%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Asegúrate de que zIndex sea suficientemente alto para estar encima de todo
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Opcional: oscurece el fondo para destacar la alerta
  },
});
