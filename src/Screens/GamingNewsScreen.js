import React, { useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { gamingNews } from '../Data/gamingNewsData';

const GamingNewsScreen = ({}) => {


    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % gamingNews.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
         <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{gamingNews[currentIndex].title}</Text>
                <Text style={styles.description}>{gamingNews[currentIndex].description}</Text>
                <Text style={styles.counter}>Noticia:  {currentIndex + 1} de {gamingNews.length}
                </Text>

                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCurrentIndex((prev) => (prev + 1) % gamingNews.length)}
                    >
                        <Text style={styles.buttonText}>Siguiente noticia</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

export default GamingNewsScreen;

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16},
    card: {
        padding: 16,
        marginVertical: 8,
        bagroundColor: "#ab5eab",
        borderRadius: 8,
    },
    title: {fontSize: 18, fontWeight: 'bold', marginBottom: 8,},
    description: {fontSize: 14, color: '#7356f2',},
});