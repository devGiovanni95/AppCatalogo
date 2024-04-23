import { Link } from "expo-router";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

interface CategoryItemProps {
    id: number,
    name: string,
    description: string,
    photo: string,
    onPress: () => void
}


export default function CategoryItem({ id, name, photo, description, onPress }: CategoryItemProps) {
    return (
        <View data-id={id} style={styles.container}>
            <Pressable onPress={onPress}>
                <Image style={styles.image} source={{ uri: photo }} />
                <View style={styles.itemDetail}>
                    <Text style={styles.itemName}>{name}</Text>
                    <Text style={styles.itemDescription}>{description}</Text>
                    <View style={{display:'flex', flexDirection:'row-reverse'}}>
                        <AntDesign name="arrowright" size={32} color="#7A5656"/> 
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        width: '90%',
        borderColor: '#7A7A7A',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 16,
        flexDirection: 'column',
        paddingTop: 16,
        paddingBottom: 16
    },
    itemDetail: {
        maxWidth: '90%',
        paddingLeft: '10%',
        paddingTop: 16
    },
    itemName: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 8
    },
    itemDescription: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 16
    },
    itemPrice: {
        color: '#000000',
        fontSize: 24,
        fontWeight: '500'

    },
    itemPromotion: {
        color: '#7A5656',
        fontSize: 14,
        fontWeight: '800',
        alignSelf: 'flex-end'
    },
    image: {
        maxWidth: '82%',
        height: 218,
        aspectRatio: 296 / 218,
        borderRadius: 8,
        alignSelf: 'center'
    },
});