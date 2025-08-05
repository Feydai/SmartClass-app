import React from "react";
import { Text, TextStyle } from "react-native";
import myTheme from "../../theme/theme";
import { TextProps, TextVarient } from "@/types";

const FontSize: Record<TextVarient, number> = {
  title: 24,
  regular: 16,
  small: 12,
};

const BaseText: React.FC<TextProps> = ({
  children,
  color = myTheme.colors.text,
  bold = false,
  textVarient = "regular",
  customStyle = {},
}) => {
  const style: TextStyle = {
    color: color,
    fontWeight: bold ? "bold" : 900,
    fontSize: FontSize[textVarient],
  };

  return <Text style={[style, customStyle]}>{children}</Text>;
};

export default BaseText;
