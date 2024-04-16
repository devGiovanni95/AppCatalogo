import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import ImageComponent from '../components/ImageComponent';
import ProductItemComponent from '../components/ProductItemComponent';
import { Center, ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import BestProductComponent from '../components/BestProductComponent';
import { router } from 'expo-router';
import { useProduct } from '../hooks/productDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

    const product = useProduct()
    const [loading, setLoading] = useState(false);

    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string
    
    }

    const [list, setList] = useState<IProductItem[]>([])
    const [productList, setProductList] = useState<IProductItem[]>([])

    useEffect(() =>{
        callApi()
        // clearStorage()
    },[productList]);
    
    useEffect(()=>{
        getItem()
        compare()
    },[list])

    function compare(){
        if(JSON.stringify(productList) != JSON.stringify(list)){
            console.log("🚀 diferente" )
            clearStorage()
            const jsonData = JSON.stringify(list);
            AsyncStorage.setItem('listProduct', jsonData)
            .then(() => {
            })
            .catch((error) => {
                console.error('Erro ao armazenar os dados:', error);
            });
        }else{
        }
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.removeItem('listProduct');
            console.log('Dados do AsyncStorage removidos com sucesso!');
        } catch (error) {
            console.error('Erro ao remover os dados do AsyncStorage:', error);
        }
    };

    const getItem =  () => {
        AsyncStorage.getItem('listProduct')
        .then((jsonData) => {
            if (jsonData !== null) {
            const data = JSON.parse(jsonData);
            setProductList(data)
            } else {
            console.log('Nenhum dado encontrado no AsyncStorage.');
            }
        })
        .catch((error) => {
            console.error('Erro ao recuperar os dados:', error);
        });
    }


      const callApi = async () =>  {
        await setLoading(true);
        try {
            const response = await fetch('https://api-catalogo-pi.onrender.com/product');
            const json = await response.json();
            setList(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            await setLoading(false); 
        }
    }

    return (
            <ScrollView>

            {loading && ( 
                            <ActivityIndicator
                                animating={loading}
                                size="large"
                                color="#00ff00"
                                style={styles.loading}
                            />
                        )}

                <TitleComponent title={'Portifólio Completo'}></TitleComponent>
                <View style={{ alignItems: "center" }}>
                {productList.map((item, index) => {
                    if (index === 0) {
                        return (
                            <BestProductComponent
                                key={index}
                                id={item.id}
                                name={item.name}
                                price={'R$ ' + item.price.toFixed(2)}
                                photo={item.photo1}
                                promotion={item.promotion}
                                description={item.description} 
                                onPress={() => {product.setProductId({id: item.id})
                                router.push('/productDetail')
                            }}/>
                        );
                    } else {
                        return (
                            <ProductItemComponent
                                key={index}
                                id={item.id}
                                name={item.name}
                                price={'R$ ' + item.price.toFixed(2)}
                                photo={item.photo1}
                                promotion={item.promotion}
                                onPress={() => {product.setProductId({id: item.id})
                                router.push('/productDetail')
                            }}/>
                        );
                    }
                })}
            </View>
            </ScrollView>
    );
    
}
const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%', 
        transform: [{ translateX: -25 }, { translateY: -25 }], 
    },
})