import { Link } from "expo-router";
import { Text, View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface IImage {
    imageUrl: ImageSourcePropType | undefined
}

export default function ImageComponent1({imageUrl}:IImage) {
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
        // marginLeft: '5%',
      width: 200,
      height: 60,
      resizeMode: 'stretch',
    },
    container: {
        flexDirection: 'row', // Estabelece o layout em linha (horizontal)
        alignItems: 'center', // Alinha os itens verticalmente ao centro
        paddingTop: 50,
        justifyContent: 'center',
      },
  });