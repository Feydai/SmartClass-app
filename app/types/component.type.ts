import { StyleProp, TextStyle, ViewStyle} from "react-native";
import { GestureResponderEvent } from "react-native";
import { LinkProps } from "expo-router";
import React from "react";

export type ButtonProps = {
  children: React.ReactNode;
  onPress?: (event?: GestureResponderEvent) => void;
  navigateTo?: string;
  link?: LinkProps["href"];
  customStyle?: StyleProp<ViewStyle>;
};

export type TextVarient = "title" | "regular" | "small";

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  textVarient?: TextVarient;
  bold?: boolean;
  customStyle?: StyleProp<TextStyle>;
};
