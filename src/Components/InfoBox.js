import React from "react";
import {View, Text, StyleSheet} from "react-native";

const InfoBox = ({title, data}) => {
    return (
        <View>  
            <Text> {title} </Text>
            {Object.entries(data).map(([key, value]) => (
                <Text key={key} >
                    <Text>{value} </Text>
                </Text>
            ))}
        </View>
    )
}

export default InfoBox;