import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
interface ScentItemProps {
    id: number,
    name: string,
    price: string,
    quantidade: number,
    image: string
    onPressAdd: () => void
    onPressRemove: () => void
}

interface ScentImageProps {
    [key: number]: any;
}

const images: ScentImageProps = {
    0: require("../assets/aroma0.png"),
    1: require("../assets/aroma1.png"),
    2: require("../assets/aroma2.png"),
    3: require("../assets/aroma3.png"),
    4: require("../assets/aroma3.png"),
    5: require("../assets/aroma3.png"),
    6: require("../assets/aroma3.png"),
};

export default function CartItemComponent({ id, name, price, quantidade, image, onPressAdd, onPressRemove }: ScentItemProps) {
    return (
        <Pressable style={styles.container} data-id={id}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri:image}} />
                {/* <Image style={styles.image} source={images[id]} /> */}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.itemName}>{name}</Text>
                <Text style={styles.text}>R$ {price}</Text>

                <View style={styles.iconContainer}>
                    <AntDesign name="minuscircle" size={24} color="red" onPress={onPressRemove}/>
                    <Text style={styles.quantity}>
                        {quantidade}
                    </Text>
                    <AntDesign name="pluscircle" size={24} color="green" onPress={onPressAdd} />
                </View>
                {/* <Text style={styles.text}> 
                  <AntDesign name="minuscircle" style={{marginRight:"5%"}} size={24} color="red" />
                    <Text style={styles.quantity}>
                      {quantidade} 
                    </Text>
                  <AntDesign name="pluscircle" size={24} color="green" />
                </Text> */}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '90%',
      marginLeft: '5%',
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
      margin: 10,
      marginTop: 5,
      alignItems: 'center',
    },
    imageContainer: {
      flex: 1,
      aspectRatio: 1,
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    textContainer: {
      flex: 2,
      padding: 10,
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    itemName: {
      color: '#000000',
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 0,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
    quantity: {
      marginEnd: 18,
      marginStart: 18,
      fontSize: 18,
      fontWeight: '500'
    }
  });