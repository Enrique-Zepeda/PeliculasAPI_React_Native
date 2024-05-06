import LottieView from "lottie-react-native";

export const BackGround = () => {
  return (
    <LottieView
      source={require("../../../assets/Animation - 1715025417459.json")}
      autoPlay
      loop
      style={{
        position: "absolute",
        width: "139%",
        height: "110%",
        zIndex: -1,
      }}
    />
  );
};
