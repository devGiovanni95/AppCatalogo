import { Text, View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface ImageComponentProps {
    imageUrl: ImageSourcePropType | undefined
    descrição: string;
    descrição1: string;
}

export default function ImageComponent({imageUrl, descrição, descrição1}:ImageComponentProps) {
    return(
        <View  style={styles.container}>
            <Image
                style={styles.stretch}
                source={imageUrl}
            />
            <Text style={styles.text}>{descrição}</Text>
            <Text style={styles.text}>{descrição1}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    stretch: {
        marginLeft: '5%',
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
    },
    text: {
        marginLeft: 10,
    },
});