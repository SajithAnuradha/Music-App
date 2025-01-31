import { View ,Text} from "react-native"
import { defaultStyles } from "@/styles/index";


const PlaylistScreens=()=>{

    return (
        <View style={defaultStyles.container}>
            <Text style={[defaultStyles.text,{ pointerEvents: "none" }]}>Screen Songs</Text>
        </View>
        
    )
}

export default PlaylistScreens;