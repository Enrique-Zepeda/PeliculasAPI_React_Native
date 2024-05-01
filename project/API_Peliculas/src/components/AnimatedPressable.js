import React, { useRef } from "react";
import { Animated, Pressable, Text } from "react-native";

export const AnimatedButton = ({ onPress, title, style }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = (newValue) => {
    Animated.spring(scale, {
      toValue: newValue,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.Pressable
      onPress={onPress}
      onPressIn={() => animateScale(0.95)}
      onPressOut={() => animateScale(1)}
      style={({ pressed }) => [
        {
          transform: [{ scale }],
          opacity: pressed ? 0.8 : 1,
        },
        style, // Usa el estilo pasado como prop
      ]}
    >
      <Text>{title}</Text>
    </Animated.Pressable>
  );
};
