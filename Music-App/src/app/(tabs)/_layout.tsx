import { colors, fontSize } from "@/constants/tokens";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";



const TabsNavigation=()=>{
    return (
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: '500',
        },
        headerShown: false,
       tabBarStyle: {
           position: 'absolute',
           borderTopWidth: 0,
           left:8,
            right:8,
           
           
           

        
         },
        tabBarBackground: () => (
          <BlurView
            intensity={105}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              
             
            }}
          />
        ),
      }}
    >
        <Tabs.Screen name="favourite"/>
        <Tabs.Screen name="playlists"/>
        <Tabs.Screen name="(songs)"/>
        <Tabs.Screen name="artists"/>
      </Tabs>

    )



}

export default TabsNavigation;