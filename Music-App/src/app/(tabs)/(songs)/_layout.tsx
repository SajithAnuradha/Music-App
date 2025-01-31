import { Stack } from "expo-router";
import { defaultStyles } from '@/styles';
import { View } from "react-native";

const SongScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                    name="index" 
                    options={{
                        headerTitle: "Songs",
                    }}
                />
            </Stack>
        </View>
    );
};

export default SongScreenLayout;
