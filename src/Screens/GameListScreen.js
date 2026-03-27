import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {typeGame} from '../Data/gameData';


const GameListScreen = ({navigation}) => {
    const [selectedGame, setSelectedGame] = useState(null);
    
    const renderType = () => {}
    return (
        <SafeAreaView className="flex-1 bg-pink-100">
            <View className="flex-1 px-4 py-6">
                <Text>Plantilla de juegos</Text>
                <Text>Selecciona un juego para ver su detalle</Text>
                <FlatList
                    data={typeGame}
                    renderItem={renderType}
                    keyExtractor={ item => item.id}
                    showsHorizontalScrollIndicator={false}
                
                />
            </View>
        </SafeAreaView>
    )
}

export default GameListScreen;