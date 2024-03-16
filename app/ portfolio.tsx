import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import ImageComponent from '../components/ImageComponent';
import ProductItemComponent from '../components/ProductItemComponent';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import BestProductComponent from '../components/BestProductComponent';
import { router } from 'expo-router';

export default function Home() {

    
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
                            <BestProductComponent
                                key={index}
                                id={item.id}
                                name={item.name}
                                price={'R$ ' + item.price.toFixed(2)}
                                photo={item.photo1}
                                promotion={item.promotion}
                                description={item.description} 
                                onPress={() =>  router.push('/faq')}/>
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
                                onPress={() =>  router.push('/faq')}
                            />
                        );
                    }
                })}
            </View>
            </ScrollView>
    );
    
}

