import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from "react-native";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { Input } from "../../components"
import {BaseText, Button} from "@/components";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { mutate, isPending, error } = useLogin();

    const handleLogin = () => {
        mutate({ email, password });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../../assets/logo/logo.png")}
                style={{ width: 200, height: 120 }}
                contentFit="contain"
            />
            <BaseText bold={true} textVarient={"title"}>Bienvenue</BaseText>
            <Input label="Email :"
                   value={email}
                   onChangeText={setEmail}
                   placeholder="vous@ecole.fr" />
            <Input label="Mot de passe "
                   value={password}
                   onChangeText={setPassword}
                   placeholder="Mot de passe"  secureTextEntry={true}/>
            <Button customStyle={styles.button} onPress={handleLogin}>Connexion</Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "80%",
    }
})

export default Login;