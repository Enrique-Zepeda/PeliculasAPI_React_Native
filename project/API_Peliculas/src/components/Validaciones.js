import { View, Text } from "react-native";
import { styles } from "../styles/ValidacionesStyles";

export const Validaciones = ({ message }) => {
  return (
    <View style={styles.error}>
      <Text style={styles.textError}>{message}</Text>
    </View>
  );
};
