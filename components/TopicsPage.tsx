import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import TopicsComponent from "./Topics";
import LoginButtonPressable from "./LoginButtonPressable";

interface TopicsPagePropsProps {
    imageUrl: any;
    intro: string;
    dicas: { id: number; title: string; description: string }[],
    conclusion: string;
    link: string;
    onPress: () => void;
}

export default function TopicsPageProps({ imageUrl, intro, dicas, conclusion, link, onPress }: TopicsPagePropsProps) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageUrl} style={styles.image} />
            </View>
            <Text style={styles.intro}>{intro}</Text>
            {dicas.map((dica) => (
                <TopicsComponent
                    key={dica.id}
                    topicTitle={dica.title}
                    topicDescription={dica.description}
                />
            ))}
            <Text style={styles.conclusion}>{conclusion}</Text>
            <View style={styles.separator} />
            <Text style={styles.link}>{link}</Text>
            <LoginButtonPressable onPress={onPress} title={"Clique aqui"} />
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
    imageContainer: {
        alignItems: "center",
        paddingBottom: 16,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    textContainer: {
        alignItems: "center",
    },
    intro: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: "justify",
    },
    conclusion: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: "justify",
    },
    separator: {
        height: 2,
        backgroundColor: "#EAEAEA",
        marginVertical: 20,
        width: "100%",
    },
    link: {
        fontSize: 16,
        marginBottom: 10,
    },
});
