import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Detail from './pages/Detail';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={ Detail }
          options={
            { headerRight: () => (
                <TouchableOpacity style={{ marginRight: 15 }}>
                  <Feather 
                    name="shopping-cart"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              ),
              headerTitle: 'Shoe touchable'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;