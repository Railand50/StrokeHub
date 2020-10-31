import React from 'react';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Posts from "./Data/Posts";
import SectionsScreen from "./Screens/SectionsScreen";
import DetailsScreen from "./Screens/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: "Home"}}
        >
          { 
          props => <SectionsScreen {...props} sections={Posts} />}
        </Stack.Screen>

        <Stack.Screen
          name="Sections"
          component = {SectionsScreen}
        />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}