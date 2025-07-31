import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../../types";
import myTheme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  navigateTo,
  customStyle = {},
}) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={[styles.text, customStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: myTheme.colors.primary,
    padding: 10,
    borderRadius: 11,
  },
  text: {
    color: myTheme.colors.buttonText,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
  },
});

export default CustomButton;
