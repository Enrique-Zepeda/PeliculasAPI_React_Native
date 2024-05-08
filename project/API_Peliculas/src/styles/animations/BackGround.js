import LottieView from "lottie-react-native";

export const BackGround = () => {
  return (
    <LottieView
      source={require("../../../assets/Animation - 1714570639549.json")}
      autoPlay
      loop
      style={{
        position: "absolute",
        width: "300%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};
