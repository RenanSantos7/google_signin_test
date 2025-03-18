import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

export type AuthStackParams = {
    Login: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
};
