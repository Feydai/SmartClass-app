import { View, Text, Alert } from "react-native";
import { useLogout} from "@/hooks/useLogin";
import { Button } from "@/components";

export default function Profile() {
    const { mutate } = useLogout();

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
