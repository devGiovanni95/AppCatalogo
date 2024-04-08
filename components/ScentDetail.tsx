import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

interface ScentItemProps {
    id: number;
    description: string;
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

export default function ScentDetail({ id, description, matches }: ScentItemProps) {
    const paragraphs = description.split('\n');
    const firstParagraph = paragraphs.shift();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemDescription}>{firstParagraph}</Text>
                        {paragraphs.map((paragraph, index) => (
                            <Text key={index} style={styles.itemDescription}>{paragraph}</Text>
                        ))}
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={images[id]} />
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.matchesContainer}>
                <Text style={styles.matchesTitle}>Esse aroma tem cara de</Text>
                    {matches.map((match, index) => (
                        <Text key={index} style={styles.match}>{match}</Text>
                    ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    itemDescription: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify',
        flexWrap: 'wrap',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    separator: {
        height: 2,
        backgroundColor: '#EAEAEA',
        marginVertical: 20,
    },
    matchesContainer: {
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
