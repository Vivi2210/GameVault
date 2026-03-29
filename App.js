import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameListScreen from '../GameVault/src/Screens/GameListScreen';
import GameDetailScreen from '../GameVault/src/Screens/GameDetailScreen';
import AddGameScreen from '../GameVault/src/Screens/AddGameScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GameListScreen">

        <Stack.Screen 
        name="GameListScreen" 
        component={GameListScreen} 
        options={{ title: 'Lista de Juegos' }} 
        />

        <Stack.Screen 
        name="GameDetailScreen"
         component={GameDetailScreen} 
         options={{ title: 'Detalle del Juego' }} 
         />

        <Stack.Screen 
        name="AddGameScreen" 
        component={AddGameScreen}
         options={{ title: 'Agregar Juego' }} 
         />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;