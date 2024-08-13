import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import CartComponent from '../components/CartComponent';
import CartItem from '../components/CartItem';
import {CartContext, CartProvider} from '../hooks/cartItem';

export default function Aromas() {

    const context = useContext(CartContext)
    if(!context){
        throw new Error('Aromas must be used within a CartProvider');
    }


    const [scentId, setScentId] = useState(0);
    // const [data, setData] = useState(aromas)
    const { products, updateProductQuantity  } = context

    const handlePressRemove = (id: number) => {
        updateProductQuantity(id, -1);
    };

    const handlePressAdd = (id: number) => {
        updateProductQuantity(id, 1);
    };

    // const handlePressRemove = (id: number) => {
    //     setData(prevData => 
    //         prevData.map(item => 
    //             item.id === id && item.quantidade > 0 
    //             ? { ...item, quantidade: item.quantidade - 1 } 
    //             : item
    //         )
    //     );
    // };

    // //adicionar funcionalidade que verifique a quantidade maxima de velas disponiveis
    // const handlePressAdd = (id: number) => {
    //     setData(prevData => 
    //         prevData.map(item => 
    //             item.id === id && item.quantidade >= 0 
    //             ? { ...item, quantidade: item.quantidade + 1 } 
    //             : item
    //         )
    //     );
    // };

    return (

    <ScrollView>
        <CartComponent title={'Carrinho'}></CartComponent>
        <View style={{ alignItems: "center" }}>
            {products.map((aroma: { id: number; titulo: string; price: string; quantidade: number; image: string; }) => (
            <CartItem
            key={aroma.id}
            id={aroma.id}
            name={aroma.titulo}
            price={aroma.price} 
            quantidade={aroma.quantidade} 
            image={aroma.image}
            onPressAdd={() => {handlePressAdd(aroma.id)}}
            onPressRemove={() => {handlePressRemove(aroma.id)}}
            />
        ))}
        </View>
    </ScrollView>

    );
}
