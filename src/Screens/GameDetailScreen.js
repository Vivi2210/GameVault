import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import InfoBox from '../Components/InfoBox';

const GameDetailScreen = ({route}) => {
    const {title, platform, genre, description, price, ageRating} = route.params;
    return (
        <SafeAreaView className="flex-1 bg-white">
            <Text className="text-2xl font-bold mb-4">{title}</Text>
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


        </SafeAreaView>
    );
}    

export default GameDetailScreen;
