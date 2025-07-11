import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
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

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "80%",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "Inter",
  },
});

export default CustomButton;
