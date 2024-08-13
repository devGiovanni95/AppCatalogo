import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useProduct } from '../hooks/productDetails';
import TitleComponent from '../components/TitleComponent';
import BestProduct from '../components/BestProduct';
import ProductItem from '../components/ProductItem';

export default function Home() {
    const product = useProduct()
    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string
    
    }

    const [list, setList] = useState<IProductItem[]>([])
    useEffect(() =>{
        fetch('https://api-catalogo-pi.onrender.com/product')
        .then(response => response.json())
        .then(json => setList(json))
    })

    return (
        <ScrollView>
            <TitleComponent title={'Portifólio Completo'}></TitleComponent>
            <View style={{ alignItems: "center" }}>
            {list.map((item, index) => {
                if (index === 0) {
                    return (
                        <BestProduct
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
                        <ProductItem
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