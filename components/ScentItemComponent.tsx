import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

interface ScentItemProps {
    id: number,
    name: string,
    description: string,
    onPress: () => void
}

interface ImageObject {
    [key: number]: any;
}

const images: ImageObject = {
    0: require("../assets/aroma0.png"),
    1: require("../assets/aroma1.png"),
    2: require("../assets/aroma2.png"),
    3: require("../assets/aroma3.png"),
};

export default function ScentItemComponent({ id, name, description, onPress }: ScentItemProps) {
    return (
        <Pressable style={styles.container} onPress={onPress} data-id={id}>
            <Image style={styles.image} source={images[id]} />
            <View style={styles.itemDetail}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.itemDescription}>{description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderColor: '#7A7A7A',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 16,
        paddingBottom: 16
    },
    itemDetail: {
        maxWidth: '55%'
    },
    itemName: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 16,
    },
    itemDescription: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '400',
    },
    image: {
        maxWidth: '35%',
        aspectRatio: 135 / 100,
        height: 100,
        borderRadius: 8,
        alignSelf: 'center'
    }
});
