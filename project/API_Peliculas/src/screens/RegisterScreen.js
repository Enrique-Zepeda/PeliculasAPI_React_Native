import React from "react";
import { View, Text, Button, TextInput } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign In</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button
        title="Registrarse"
        onPress={() => alert("TODO: Implement sign in")}
      />
      <Button
        title="Iniciar Sesion"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
