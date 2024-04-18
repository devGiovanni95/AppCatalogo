import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

interface ScentItemProps {
    id: number;
    text1: string;
    text2: string;
    matches: string[];
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

export default function ScentDetail({ id, text1, text2, matches }: ScentItemProps) {
    return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={images[id]} />
                </View>

                <Text style={styles.text}>{text1}</Text>
                <Text style={styles.text}>{text2}</Text>


                <View style={styles.matchesContainer}>
                    <Text style={styles.matchesTitle}>Esse aroma tem cara de</Text>
                        {matches.map((match, index) => (
                            <Text key={index} style={styles.match}>{match}</Text>
                        ))}
                    </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    textContainer: {
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: "center",
        paddingBottom: 16,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    matchesContainer: {
        marginTop:16,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    matchesTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    match: {
        fontSize: 16,
        marginBottom: 5,
    },
});
