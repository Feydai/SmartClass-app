import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
// import { screenHomeProps } from '../../types/screenProps';
// type Props = screenHomeProps;
// const screenHome: React.FC<Props> = ({ /* props */ }) => {

const ScreenHome = (): React.JSX.Element => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>screenHome</Text>
      <Button
        title="LOGIN"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
    </View>
  );
};

export default ScreenHome;
