import React, { useEffect, useRef, useState } from 'react';
import { Center, ScrollView , Text, View} from '@gluestack-ui/themed';
import {DrawerLayoutAndroid, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StyledButtonPressable from '../components/LoginButtonPressable';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Cart() {
    const drawer = useRef<DrawerLayoutAndroid>(null);
    const router = useRouter();
    const [productsDetails, setProductsDetails] = useState<any[]>([]);
    const [products, setProducts] = useState<number[]>([]);
    const [subTotal, setSubTotal] = useState<number>()

    
    useEffect(() => {
        loadProducts()
    },[products])
    
    
    const loadProducts = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('products');
            if (jsonValue !== null) {
                setProducts(JSON.parse(jsonValue));
            }
            loadProductDetails(products)
        } catch (error) {
            console.error('Error loading products from AsyncStorage:', error);
        }
    };
    
    
    const loadProductDetails = async (products: number[]) => {
        try {
            const promises = products.map(async (product) => {
                const response = await fetch(`https://api-catalogo-pi.onrender.com/product/${product}`);
                const productDetail = await response.json();
                return productDetail;
            });
            const productsDetails = await Promise.all(promises);
            setProductsDetails(productsDetails);

            let total: number = 0;
            productsDetails.map((product)=>{
                total +=  product.price
            })
            setSubTotal(total)
            storeSubTotal(total.toString())

        } catch (error) {
            console.error('Error loading product details:', error);
        }
    };

    const storeSubTotal = async (value: string) => {
        try {
          await AsyncStorage.setItem('subtotal', value);
        } catch (e) {
            console.error('Error save SubTotal:', e);
        }
      };
    
    function handleFinish(){
        if(subTotal != 0){
            router.push('/requestOrder');
            drawer.current?.closeDrawer();
        }else{
            router.push('/notFoundProducts')
        }
    }

    const removeProductAtIndex = async (indexToRemove: number) => {
        try {
            const jsonValue = await AsyncStorage.getItem('products');
            if (jsonValue !== null) {
                let products = JSON.parse(jsonValue);
                if (indexToRemove >= 0 && indexToRemove < products.length) {
                    products.splice(indexToRemove, 1);
                    await AsyncStorage.setItem('products', JSON.stringify(products));
                } else {
                    console.error('Índice fora dos limites.');
                }
            }
        } catch (error) {
            console.error('Erro ao remover produto do AsyncStorage:', error);
        }
    };
    
    
    return (
        <ScrollView width={"100%"}>
                <Center>

                <Text style={styles.amount}>
                    Total Carrinho  R$ {subTotal !== undefined ? subTotal : 0}
                </Text>
                {productsDetails && productsDetails.map((productDetail, index) => (
                    <Text key={index} style={styles.text}>
                        {index + 1}, Nome: {productDetail.name}, Preço: {productDetail.price} <Ionicons style={{marginLeft:10}} name="trash-bin" size={24} color="red" onPress={() => removeProductAtIndex(index)} />
                    </Text>
                ))}

                <View style={styles.button}>
                    <StyledButtonPressable
                        title='Finalizar Pedido'
                        color='black'
                        onPress={handleFinish}
                        />
                </View>
            </Center>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    amount:{
        marginTop: 15,
        marginBottom: 15,
        height:50,
        backgroundColor: '#7A5656',
        fontSize: 25,
        color: 'white',
        textAlign:'center',
        alignItems:'center',
        justifyContent: 'center',
        padding: 5,
        width:'100%'
    },
    button:{
        marginTop: 30,
        width:'80%',
    },
    text:{
        fontSize:15,
        fontWeight: 'bold',
    }
})