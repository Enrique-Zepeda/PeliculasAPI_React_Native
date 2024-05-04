import { View, Text } from "react-native";
import { useAuth } from "../context/AuthContext";

export const ProfileScreen = () => {
  const { user } = useAuth();
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Bienvenido {user?.name || "Nombre no disponible"}</Text>
    </View>
  );
};
