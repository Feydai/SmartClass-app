import { SafeAreaView } from "react-native-safe-area-context";
import { Button, BaseText } from "../components/";
import { Image, ImageBackground } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function Home() {
  const background = require("../assets/background/background.png");
  const logo = require("../assets/logo/logo.png");

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.img} contentFit="contain" />
      </View>
      <View style={styles.bottom}>
        <Button customStyle={{ width: "100%" }}>CONNEXION</Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  img: {
    width: 300,
    height: 300,
  },
  bottom: {
    alignItems: "center",
    marginBottom: 100,
  },
});
