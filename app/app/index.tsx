import { SafeAreaView } from "react-native-safe-area-context";
import { Button, BaseText } from "../components/";
import { useEffect } from "react";

// import { indexProps } from '../../types/screenProps';

// type Props = indexProps;
// const index: React.FC<Props> = ({ /* props */ }) => {
export default function Home() {
  return (
    <SafeAreaView>
      <BaseText textVarient="title" bold={true}>
        BIENVENU !
      </BaseText>
      <Button>CONNEXION</Button>
    </SafeAreaView>
  );
};
