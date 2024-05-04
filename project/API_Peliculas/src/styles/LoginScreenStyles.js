import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    height: 50,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    elevation: 2,
    paddingRight: 50,
  },
  button: {
    width: "75%",
    height: 50,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  iconContainer: {
    paddingRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 160,
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  passwordContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "75%",
  },
  resetText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "right",
    textDecorationLine: "underline",
    paddingVertical: 0,
    marginRight: 10,
    marginTop: -15,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoApp: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
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
