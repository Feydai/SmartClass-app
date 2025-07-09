import React from "react";
import { Button } from "react-native";
import { componentPropsButton } from "../../types/componentsProps";
import { useNavigation } from "@react-navigation/native";

type Props = componentPropsButton;
const CustomButton: React.FC<Props> = ({ title, onPress, navigateTo }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    } else if (onPress) {
      onPress();
    }
  };

  return <Button title={title} onPress={handlePress}/>;
};

export default CustomButton;
