import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button/Button";
import BaseText from "../../components/Text/Text";
// import { screenHomeProps } from '../../types/screenProps';
// type Props = screenHomeProps;
// const screenHome: React.FC<Props> = ({ /* props */ }) => {

const ScreenHome = (): React.JSX.Element => {
  return (
    <View>
      <Text>screenHome</Text>
      <Button>
        SE CONNECTER
      </Button>
    </View>
  );
};

export default ScreenHome;
