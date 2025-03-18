import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

export type AppStackParams = {
    Home: undefined;
}

const Stack = createNativeStackNavigator<AppStackParams>();

export default function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
};
