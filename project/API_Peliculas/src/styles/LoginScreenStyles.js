import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#252222",
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
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: "#636363",
    elevation: 2,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#6C63FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
    elevation: 3,
  },
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    height: 100,
    marginTop: 50,
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
  logoApp: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});