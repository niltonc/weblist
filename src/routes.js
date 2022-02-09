import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/home/index';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home"
              component={HomeScreen}
              options={{ title: '', headerShown: false, header: null }}         
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}