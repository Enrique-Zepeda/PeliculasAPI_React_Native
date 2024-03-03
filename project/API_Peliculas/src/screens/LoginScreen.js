import React from "react";
import { View, Text, Button, TextInput } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
    </View>
  );
};
