import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import GamingNewsScreen from '../Screens/GamingNewsScreen';
import AddGameScreen from '../Screens/AddGameScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Juegos disponibles" component={StackNavigator} />
            <Tab.Screen name="Noticias de juegos" component={GamingNewsScreen} />
            <Tab.Screen name="Agregar juego" component={AddGameScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;