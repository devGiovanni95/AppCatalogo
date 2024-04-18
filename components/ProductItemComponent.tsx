import { Link } from "expo-router";
import { Text, View, Image, StyleSheet, ImageSourcePropType, Pressable } from "react-native";


interface ProductItemComponentProps {
    id: number,
    name: string,
    price: string,
    photo: string,
    promotion: boolean,
    onPress: () => void
}


export default function ProductItemComponent({ id, name, price, photo, promotion, onPress }: ProductItemComponentProps) {
    /*Formata a o preço para mostrar duas casas decimais*/
    const formattedPrice = price
    return (
        <Pressable style={styles.container} onPress={onPress} data-id={id}>
                
                <Image style={styles.image} source={{ uri: photo }} />
                <View style={styles.itemDetail}>
                    
                    <Text style={styles.itemName}>{name}</Text>
                    <Text style={styles.itemPrice}>{formattedPrice}</Text>
                    <Text style={styles.itemPromotion}>{promotion ? "Em promoção" : ""}</Text>
        
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
    itemPrice: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 16

    },
    itemPromotion: {
        color: '#7A5656',
        fontSize: 14,
        fontWeight: '800',
        alignSelf: 'flex-end'
    },
    image: {
        maxWidth: '35%',
        aspectRatio: 135 / 100,
        height: 100,
        borderRadius: 8,
        alignSelf: 'center'
    },

});