import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameListScreen from '../Screens/GameListScreen';
import GameDetailScreen from '../Screens/GameDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="GameListScreen" component={GameListScreen} options={{ title: 'Lista de Juegos' }} />
            <Stack.Screen name="GameDetailScreen" component={GameDetailScreen} options={{ title: 'Detalle del Juego' }} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
