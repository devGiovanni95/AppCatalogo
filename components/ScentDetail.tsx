import { Text, View, Image, StyleSheet, } from "react-native";

interface ScentItemProps {
    id: number,
    name: string,
    photo: string,
    description: string,
}

export default function ScentItem({ id, name, photo, description }: ScentItemProps) {
    return (
     <>
        <Image style={styles.image} source={require(`../assets/image2.png`)} />
        <View style={styles.itemDetail}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
        </View>
    </>
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
    itemDescription: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '400',
    },
    image: {
        maxWidth: '35%',
        aspectRatio: 135 / 100,
        height: 100,
        borderRadius: 8,
        alignSelf: 'center'
    }
});
