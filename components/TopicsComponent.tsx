import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface TopicsComponentProps {
    topicTitle: string,
    topicDescription: string,
}

export default function TopicsComponent ({ topicTitle, topicDescription }: TopicsComponentProps) {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.topicTitle}>{topicTitle}</Text>
            <Text style={styles.topicDescription}>{topicDescription}</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: 'center',
    },
    topicTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#7A5656',
    },
    topicDescription: {
        fontSize: 16,
        marginBottom: 16,
    },
});
