export type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  navigateTo?: string;
};

export type TextVarient = "title" | "regular" | "small";

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  textVarient?: TextVarient;
  bold?: boolean;
};
