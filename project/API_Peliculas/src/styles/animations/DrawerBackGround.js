import LottieView from "lottie-react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export const DrawerBackGround = () => {
  return (
    <LottieView
      source={require("../../../assets/Animation - 1714570639549.json")}
      autoPlay
      loop
      style={{
        position: "absolute",
        width: screenWidth * 2.05,
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};
