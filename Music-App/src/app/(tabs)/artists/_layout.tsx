import { Stack } from "expo-router";
import {defaultStyles} from '@/styles'
import { View } from "react-native";
const ArtistscreenLayout =()=>{


    return (
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen name="index" options={
                {
                    headerTitle:"Artists"
                }
            }/>
        </Stack>

    </View>
    );




}


export default ArtistscreenLayout;
