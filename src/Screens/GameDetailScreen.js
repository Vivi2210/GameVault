import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import InfoBox from '../Components/InfoBox';
import styles from '../Styles/GameDetailStyles';

const GameDetailScreen = ({route, navigation}) => {
    const {title, platform, genre, description, price, ageRating} = route.params;
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.card}>
                    <InfoBox
                    title="Detalles del Juego"
                    data={{
                        platform: platform,
                        genre: genre,
                        description: description,
                        price: price,
                        ageRating: ageRating
                    }}
                />    
                </View>

                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>atras</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}    

export default GameDetailScreen;
