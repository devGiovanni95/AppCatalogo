import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from '@gluestack-ui/themed'
import { router } from 'expo-router'
import { useProduct } from '../hooks/productDetails'
import { useCategory } from '../hooks/categoryDetails'
import BestProduct from '../components/BestProduct'
import ProductItem from '../components/ProductItem'
import TitleComponent from '../components/TitleComponent'

export default function ProductCategory() {
    const category = useCategory()
    const product = useProduct()
    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string

    }

    const [productList, setProductList] = useState<IProductItem[]>([]);

    useEffect(() => {
        if (category.categoryId) {
            fetch(`https://api-catalogo-pi.onrender.com/product/category/${category.categoryId.id}`)
                .then(response => response.json())
                .then(json => setProductList(json))
        }
    }, [category.categoryId]);


    if (!productList) {
        return <TitleComponent title="Carregando..." />
    }
    else {
        return (
            <ScrollView>
                <TitleComponent title={'Produtos'}></TitleComponent>
                <View style={{ alignItems: "center" }}>
                    {productList.map((item, index) => {
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
                                    onPress={() => {
                                        product.setProductId({ id: item.id })
                                        router.push('/productDetail')
                                    }} />
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
                                    onPress={() => {
                                        product.setProductId({ id: item.id })
                                        router.push('/productDetail')
                                    }} />
                            );
                        }
                    })}
                </View>
            </ScrollView>
        );
    }
}