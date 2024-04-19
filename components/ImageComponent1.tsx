import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface ImageComponent1Props {
    imageUrl: ImageSourcePropType | undefined
}

export default function ImageComponent1({imageUrl}:ImageComponent1Props) {
    return(
        <View  style={styles.container}>
            <Image
                style={styles.stretch}
                source={imageUrl}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    stretch: {
        width: 200,
        height: 60,
        resizeMode: 'stretch',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        justifyContent: 'center',
    },
});