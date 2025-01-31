import { Stack } from "expo-router";
import { defaultStyles } from '@/styles';
import { View } from "react-native";

const PlaylistscreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerTitle: "Playlists",
                    }}
                />
            </Stack>
        </View>
    );
};

export default PlaylistscreenLayout;
