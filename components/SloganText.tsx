import React from "react";
import { Text, View, StyleSheet } from "react-native";


interface SloganItemProps {
    text: string
}

export default function SloganText ({ text }: SloganItemProps) {
    return(
        <View>
            <Text style={styles.slogan}>{text}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    slogan: {
        fontSize: 16, 
        textAlign: 'center', 
        marginVertical: 10,
    },
})