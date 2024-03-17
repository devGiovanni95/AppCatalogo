import React, { createContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import BestProductComponent from '../components/BestProductComponent';
import ProductItemComponent from '../components/ProductItemComponent';
import { router } from 'expo-router';

interface IProductItem {
    id: number,
    name: string,
    price: number,
    photo1: string,
    promotion: boolean,
    description: string
}

export const ProductContext = createContext<IProductItem | null>(null);

export default function Home() {
    const [list, setList] = useState<IProductItem[]>([]);

    useEffect(() => {
        fetch('https://api-catalogo-pi.onrender.com/product')
            .then(response => response.json())
            .then(json => setList(json))
            .catch(error => console.error('Erro ao carregar a lista de produtos:', error));
    }, []);
   
    function handleProductPress () {
        router.push('/product' );
    };


    return (
        <ScrollView>
            <TitleComponent title={'Portifólio Completo'} />
            <View style={{ alignItems: "center" }}>
                {list.length > 0 ? list.map((item, index) => (
                    <ProductContext.Provider key={item.id} value={item}>
                        {index === 0 ? (
                            <BestProductComponent
                                id={item.id}
                                name={item.name}
                                price={'R$ ' + item.price.toFixed(2)}
                                photo={item.photo1}
                                promotion={item.promotion}
                                description={item.description}
                                onPress={() => handleProductPress()}
                            />
                        ) : (
                            <ProductItemComponent
                                id={item.id}
                                name={item.name}
                                price={'R$ ' + item.price.toFixed(2)}
                                photo={item.photo1}
                                promotion={item.promotion}
                                onPress={() => handleProductPress()}
                            />
                        )}
                    </ProductContext.Provider>
                )) : <TitleComponent title={'Aguardando produtos...'} />}
            </View>
        </ScrollView>
    );
}
