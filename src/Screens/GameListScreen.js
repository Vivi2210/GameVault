import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {typeGame} from '../Data/gameData';
import { Button } from 'react-native';


const GameListScreen = ({navigation, route}) => {
    const [games, setGames] = useState(typeGame);

    useEffect(() => {
        if(route.params?.newGame){
            setGames(prevGames => [...prevGames, route.params.newGame]);
        }
    }, [route.params?.newGame]);


    const [typeSelectedGame, setTypeSelectedGame] = useState(null);
    
    const renderType = ({item}) => {
        const selected = typeSelectedGame?.id === item.id;
        return (
            <TouchableOpacity
                onPress={() => setTypeSelectedGame(item)}
            >
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const handleContinue = () => {
        if(typeSelectedGame){
            navigation.navigate('GameDetailScreen', typeSelectedGame);
        }
    }    
    return (
        <SafeAreaView className="flex-1 bg-pink-100">
            <View className="flex-1 px-4 py-6">
                <Text>Plantilla de juegos</Text>
                <Text>Selecciona un juego para ver su detalle</Text>
                <FlatList
                    data={typeGame}
                    renderItem={renderType}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                
                />
                <Button
                    onPress={handleContinue}
                    disabled={!typeSelectedGame}
                    title="Continuar"
                    className="bg-pink-500 py-3 px-4 rounded-lg mt-6" 
                />
            </View>
        </SafeAreaView>
    )
}

export default GameListScreen;