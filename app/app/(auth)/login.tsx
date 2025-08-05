import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TextInput, Button, Text } from "react-native";
import { useLogin } from "@/hooks/useLogin";
import { useRouter } from "expo-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { mutate, isPending, error } = useLogin();

    const handleLogin = () => {
        mutate({ email, password });
    };

    return (
        <SafeAreaView>
            <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
            <TextInput value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
            {error && <Text>{error.message}</Text>}
            <Button title="Connexion" onPress={handleLogin} />
        </SafeAreaView>
    );
};

export default Login;
