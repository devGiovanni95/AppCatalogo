import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import BestProductComponent from '../components/BestProductComponent';
import ProductItemComponent from '../components/ProductItemComponent';
import { router } from 'expo-router';
import { useProduct } from '../hooks/productDetails';

export default function Home() {
    const product = useProduct();
    
    interface IProductItem {
        id: number;
        name: string;
        price: number;
        photo1: string;
        promotion: boolean;
        description: string;
    }

    const [list, setList] = useState<IProductItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api-catalogo-pi.onrender.com/product')
        .then(response => response.json())
        .then(json => {
            setList(json);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <ScrollView>
            <TitleComponent title={'Portfólio Completo'} />
            <View style={{ alignItems: "center" }}>
                {list.length > 0 ? list.map((item, index) => (
                    index === 0 ? (
                        <BestProductComponent
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={'R$ ' + item.price.toFixed(2)}
                            photo={item.photo1}
                            promotion={item.promotion}
                            description={item.description} 
                            onPress={() => {
                                product.setProductId({ id: item.id });
                                router.push('/productDetail');
                            }}
                        />
                    ) : (
                        <ProductItemComponent
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={'R$ ' + item.price.toFixed(2)}
                            photo={item.photo1}
                            promotion={item.promotion}
                            onPress={() => {
                                product.setProductId({ id: item.id });
                                router.push('/productDetail');
                            }}
                        />
                    )
                )) : 
                   <View style={styles.container}>
                         <TitleComponent title={'Nenhum detalhe do produto disponível'}/>
                   </View>}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        backgroundColor: '#f5f5f5',
    },
});
