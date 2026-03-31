import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {typeGame} from '../Data/gameData';
import { Button } from 'react-native';
import styles from '../Styles/GameListStyles'


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
                style = {[
                    styles.card,
                    selected && styles.cardSelected
                ]}
            >
                <View>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>{item.description}</Text>
                    <Text style={styles.cardPrice}>${item.price}</Text>
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
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Plantilla de juegos</Text>
                    <Text style={styles.headerSubtitle}>Selecciona un juego para ver su detalle</Text>
                </View>
                
                <View>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('AddGameScreen')}
                        style={styles.addButton}
                    >
                    </TouchableOpacity>
                </View>

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
                    color="#e91e63"
                />
            </View>
        </SafeAreaView>
    )
}

export default GameListScreen;