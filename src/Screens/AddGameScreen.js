import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView} from 'react-native-safe-area-context';

//Ftítulo, plataforma, género, precio y clasificación de edad del videojuego.
const AddGameScreen = ({navigation, route}) => {

    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [ageRating, setAgeRating] = useState("");

    const validateForm = () => {
        if(!title.trim() || !price.trim() || !price.trim() 
        || !ageRating.trim() || !platform.trim() || !genre.trim()){
            Alert.alert("ingresa todos los campos");
            return;
        }

        navigation.navigate("GameListScreen",
            {newGame: {
                title,
                platform,
                genre,
                price,
                ageRating

            }
        });
    } 
       
    return(
        <SafeAreaView>
            <KeyboardAvoidingView className = "flex-1">
                <ScrollView>
                    <Text>agregacion de juegos</Text>

                    <Text>titulo</Text>
                    <TextInput
                        placeholder="Ej: Casa barbie"
                        value={title}
                        onChangeText={setTitle}
                    />

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

                    <TouchableOpacity>
                        <Text onPress={validateForm}>agregar rel juego</Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}
export default AddGameScreen;