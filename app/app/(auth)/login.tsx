import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, TextInput} from "react-native";
import { BaseText } from "../../components"
import { Image } from "expo-image"

export default function Home() {
    const logo = require("../../assets/logo/logo.png")
    return (
        <SafeAreaView>
            <Image source={logo}/>
            <BaseText>login screen rtr</BaseText>
        </SafeAreaView>
       );
}