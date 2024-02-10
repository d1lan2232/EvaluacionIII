import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { HomeScreen } from '../Screens/HomeScreen';
import { Imagen1Screen } from '../Screens/Imagen1Screen';
import { Imagen2Screen } from '../Screens/Imagen2Screen';
import { MayorIgual } from '../Screens/MayorIgual';
import { MenorIgual } from '../Screens/MenorIgual';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Imagen1Screen" component={Imagen1Screen} />
      <Stack.Screen name="Imagen2Screen" component={Imagen2Screen} />
      <Stack.Screen name="MayorIgual" component={MayorIgual} />
      <Stack.Screen name="MenorIgual" component={MenorIgual} />
    </Stack.Navigator>
  );
}