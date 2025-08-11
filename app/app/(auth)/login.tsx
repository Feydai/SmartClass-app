import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, StyleSheet } from "react-native";
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

    const img = require("../../assets/logo/logo.png");
    return (
        <SafeAreaView style={styles.container}>
            <Image source={img} />
            <BaseText>Bienvenue</BaseText>
            <Input label="Email"
                   value={email}
                   onChangeText={setEmail}
                   placeholder="vous@ecole.fr" />
            <Input label="Password"
                   value={password}
                   onChangeText={setPassword}
                   placeholder="Password"  />
            {error && <Text>{error.message}</Text>}
            <Button customStyle={{ width: "90%" }} onPress={handleLogin}>Connexion</Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Login;
