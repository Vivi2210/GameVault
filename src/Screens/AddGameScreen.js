import React, { useState} from "react";
import { View, Text, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    ScrollView, Alert, Platform, 
    TextInput, StyleSheet } from "react-native";
import { SafeAreaView} from 'react-native-safe-area-context';

const AddGameScreen = ({navigation}) => {

    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [ageRating, setAgeRating] = useState("");

    const validateForm = () => {
        if(!title.trim() 
            || !price.trim() 
            || !price.trim() 
            || !ageRating.trim() 
            || !platform.trim() 
            || !genre.trim()){
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
        <SafeAreaView>
            <KeyboardAvoidingView className = "flex-1 bg-pink-100 px-4 py-6" behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView>
                    <Text>agregar juego</Text>
                <View>
                    <Text>titulo</Text>
                    <TextInput
                        placeholder="Ej: Casa barbie"
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>

                    <Text>plataforma</Text>
                    
                    <TextInput
                        placeholder="Ej: PlayStation 5"
                        value={platform}
                        onChangeText={setPlatform}
                    />
                    <Text>genero</Text>
                    <TextInput
                        placeholder="Ej: Accion"
                        value={genre}
                        onChangeText={setGenre}
                    />
                    <Text>precio</Text>
                    <TextInput
                        placeholder="Ej: $27.999"
                        value={price}
                        onChangeText={setPrice}
                    />

                    <Text>clasificacion de edad</Text>
                    <TextInput
                        placeholder="Ej: E"
                        value={ageRating}
                        onChangeText={setAgeRating}
                    />

                    <TouchableOpacity
                         onPress={validateForm}>
                        <Text>agregar el juego</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}
export default AddGameScreen;

