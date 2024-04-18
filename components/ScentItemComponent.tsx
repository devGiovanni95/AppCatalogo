import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

interface ScentItemComponentProps {
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

export default function ScentItemComponent({ id, name, description, onPress }: ScentItemComponentProps) {
    return (
        <Pressable style={styles.container} onPress={onPress} data-id={id}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={images[id]} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.text}>{description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginLeft: '5%',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
      margin: 10,
      marginTop: 30,
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      aspectRatio: 1,
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    textContainer: {
      flex: 2,
      padding: 10,
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    itemName: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 16,
    },
  });