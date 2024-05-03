import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FormsRoutes } from "./src/routes/FormsRoutes";
export default function App() {
  return (
    <NavigationContainer>
      <FormsRoutes />
    </NavigationContainer>
  );
}
