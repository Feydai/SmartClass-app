import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { TextProps, TextVarient } from "../../../types";

const FontSize: Record<TextVarient, number> = {
  title: 24,
  regular: 16,
  small: 12,
};

const BaseText: React.FC<TextProps> = ({
  children,
  color = "#20293A",
  bold = false,
  textVarient = "regular",
}) => {
  const style: TextStyle = {
    color: color,
    fontWeight: bold ? "bold" : 900,
    fontSize: FontSize[textVarient],
  };

  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter",
  },
});

export default BaseText;
