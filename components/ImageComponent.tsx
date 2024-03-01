import { Link } from "expo-router";
import { Text, View, Image, StyleSheet, ImageSourcePropType } from "react-native";

interface IImage {
    imageUrl: ImageSourcePropType | undefined
    descrição: string;
    descrição1: string;
}

export default function ImageComponent({imageUrl, descrição, descrição1}:IImage) {
    return(
        <View  style={styles.container}>
            <Image
                style={styles.stretch}
                source={imageUrl}
            />
             <Text style={styles.text}>{descrição}</Text>
             {/* {'\n'} */}
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
        flexDirection: 'row', // Estabelece o layout em linha (horizontal)
        alignItems: 'center', // Alinha os itens verticalmente ao centro
        paddingTop: 50,
      },
      text: {
        marginLeft: 10, // Adiciona um espaço à esquerda do texto para separá-lo da imagem
      },
  });