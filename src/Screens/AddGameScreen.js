import React, { useState} from "react";
import { View, Text, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView, Alert, Platform, 
    TextInput } from "react-native";
import { SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/AddGameStyles';

const AddGameScreen = ({navigation}) => {

    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [ageRating, setAgeRating] = useState("");

    const validateForm = () => {
        if(!title.trim() 
            || !price.trim() 
            || !ageRating.trim() 
            || !platform.trim() 
            || !genre.trim())
            {

            Alert.alert("ingresa todos los campos");
            return;
        }
        Alert.alert("juego agregado");

        navigation.navigate("GameListScreen",
            {newGame: {
                id: Date.now().toString(),
                title,
                platform,
                genre,
                price,
                ageRating

            },
        });
    }; 
       
    return(
        <SafeAreaView style= {styles.container}>
            <KeyboardAvoidingView style= {styles.keyboardView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView>
                    <Text style={styles.header}>agregar juego</Text>
                <View style ={styles.inputGroup}>

                    <Text style= {styles.label}>titulo</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="Ej: Casa barbie"
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>
                <View style ={styles.inputGroup}>
                    <Text style ={styles.label}>plataforma</Text>
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: PlayStation 5"
                        value={platform}
                        onChangeText={setPlatform}
                    />
                </View>

                <View style ={styles.inputGroup}>
                    <Text style={styles.label}>genero</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="Ej: Accion"
                        value={genre}
                        onChangeText={setGenre}
                    />
                </View>

                <View style ={styles.inputGroup}>
                    <Text style = {styles.label}>precio</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="Ej: $27.999"
                        value={price}
                        onChangeText={setPrice}
                    />
                </View>

                <View style ={styles.inputGroup}>
                    <Text style = {styles.label}>clasificacion de edad</Text>
                    <TextInput
                        style = {styles.input}
                        placeholder="Ej: E"
                        value={ageRating}
                        onChangeText={setAgeRating}
                    />
                </View>
                    <TouchableOpacity
                    style= {styles.addButton}
                         onPress={validateForm}>
                        <Text style={styles.addButtonText}>agregar el juego</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.clearButton}
                        onPress={() => {
                            setTitle("");
                            setPlatform("");
                            setGenre("");
                            setPrice("");
                            setAgeRating("");
                        }}
                        >
                            <Text style={styles.clearButtonText}>Limpiar</Text>
                    </TouchableOpacity>


                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}
export default AddGameScreen;

