import { View } from "react-native";
import LottieView from "lottie-react-native";
export const SuccessAnimationScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
      }}
    >
      <LottieView
        source={require("../../../assets/Animation - 1714579893193.json")}
        autoPlay
        loop={false}
        resizeMode="contain"
        style={{
          width: "50%",
          height: "80%",
        }}
        onAnimationFinish={() => {
          navigation.navigate("Drawer");
        }}
      />
    </View>
  );
};
