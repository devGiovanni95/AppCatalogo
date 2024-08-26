import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import CartComponent from '../components/CartComponent';
import CartItem from '../components/CartItem';
import {CartContext, CartProvider} from '../hooks/cartItem';
import ButtonStyled from '../components/ButtonStyled';
// import { AsyncStorage } from 'expo-secure-store';
import * as SecureStore from 'expo-secure-store';

interface IAddress {
    address: string
    district: string
    city: string
    state: string
    country: string
}

export default function Aromas() {

    const context = useContext(CartContext)
    if(!context){
        throw new Error('Aromas must be used within a CartProvider');
    }

    const [total, setTotal] = useState(0);
    const [address, setAddress] = useState({
        address: '',
        district: '',
        state: '',
        country: ''
      })
    const { products, updateProductQuantity  } = context

    const handlePressRemove = (id: number) => {
        updateProductQuantity(id, -1);
    };

    const handlePressAdd = (id: number) => {
        updateProductQuantity(id, 1);
    };

    useEffect(() => {
       const newTotal = products.reduce((accum, item) => {
            return accum + (Number(item.price) * item.quantidade);
        }, 0);

        setTotal(newTotal);
    },[products])
  
    return (

    <ScrollView>
        <CartComponent title={'Carrinho'}></CartComponent>
  
        <View style={{ alignItems: "center" }}>
            {products.map((aroma: { id: number; name: string; price: string; quantidade: number; image: string; }) => (
            <CartItem
            key={aroma.id}
            id={aroma.id}
            name={aroma.name}
            price={aroma.price} 
            quantidade={aroma.quantidade} 
            image={aroma.image}
            onPressAdd={() => {handlePressAdd(aroma.id)}}
            onPressRemove={() => {handlePressRemove(aroma.id)}}
            />
        ))}
        </View>

        <View style={{display:'flex', alignItems:'center', marginTop:15}}>
            <Text style={{fontSize:22, fontWeight:"700", color: '#7A5656'}}>
                {'SubTotal : R$ '} {total.toFixed(2)}
            </Text>
            <View style={{width: '90%', marginTop:15}}>
                 <ButtonStyled 
                    title={'Finalizar Pedido'} 
                    color={'#7A5656'} 
                    colorText={'white'} 
                    borderColor={'white'} 
                    onPress={()=>{router.push('confirmationOrder')}}
                />
            </View>
        </View>
    </ScrollView>
);
    
}
const styles = StyleSheet.create({
    container: {
      padding: 20
    },
    label: {
      marginBottom: 10,
      fontSize: 18
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
      padding: 10,
      marginBottom: 20
    }
  });
