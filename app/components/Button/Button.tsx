import React from "react";
import {StyleSheet, TouchableOpacity, Text, View, Pressable} from "react-native";
import { ButtonProps } from "@/types";
import myTheme from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router"

const CustomButton: React.FC<ButtonProps> = ({
  children,
  onPress,
  navigateTo,
  customStyle = {}, link,
}) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    } else if (onPress) {
      onPress();
    }
  };
  return link ? (
     <View style={[styles.button, customStyle]}>
       <Link href={link} asChild>
         <Pressable>
           <Text style={styles.text}>{children}</Text>
         </Pressable>
       </Link>
     </View>
  ) : (
      <TouchableOpacity style={[styles.button, customStyle]} onPress={handlePress}>
        <Text style={[styles.text]}>{children}</Text>
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
