import { StyleProp, TextStyle } from "react-native";

export type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  navigateTo?: string;
  customStyle?: StyleProp<TextStyle>;
};

export type TextVarient = "title" | "regular" | "small";

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  textVarient?: TextVarient;
  bold?: boolean;
  customStyle?: StyleProp<TextStyle>;
};
