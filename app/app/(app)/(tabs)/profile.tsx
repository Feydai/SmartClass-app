import { View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useLogout} from "@/hooks/useLogin";
import { Button } from "@/components";
import {useState} from "react";

export default function Profile() {
    const router = useRouter();
    const { mutate, error } = useLogout();
    const [user, setUser] = useState("");

    const handleLogout = () => {
        mutate()
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profil</Text>
            <Button onPress={handleLogout}>Deco</Button>
        </View>
    );
}
