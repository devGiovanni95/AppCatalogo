import React, { useEffect, useState } from 'react';
import { Center, ScrollView, View } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import BestProductComponent from '../components/BestProductComponent';

import { useProduct } from '../hooks/productDetails';
import StyledButtonPressable from '../components/LoginButtonPressable';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProductDetails() {
    const product = useProduct(); // Obtenha o ID do produto usando useProduct

    
    const [products, setProducts] = useState<number[]>([]);
    const [productInput, setProductInput] = useState('');
    
    interface IProductItem {
      id: number,
      name: string,
      price: number,
      photo1: string,
      promotion: boolean,
      description: string
      
    }
    
    useEffect(() => {
      loadProducts()
      }, [product])

    const loadProducts = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('products');
          console.log("🚀 ~ loadProducts ~ jsonValue:", jsonValue)
          if (jsonValue !== null) {
            setProducts(JSON.parse(jsonValue));
          }
        } catch (error) {
          console.error('Error loading products from AsyncStorage:', error);
        }
      };

    const saveProduct = async () => {
        try {
          const newProducts = [...products, product.productId.id];
          await AsyncStorage.setItem('products', JSON.stringify(newProducts));
          setProducts(newProducts);
          setProductInput('');
        } catch (error) {
          console.error('Error saving product to AsyncStorage:', error);
        }
      };

    const [productDetail, setProductDetail] = useState<IProductItem | null>(null); // Estado para armazenar os detalhes do produto

    useEffect(() => {
        if (product.productId) {
            fetch(`https://api-catalogo-pi.onrender.com/product/${product.productId.id}`)
                .then(response => response.json())
                .then(json => setProductDetail(json))
                .catch(error => console.error('Erro ao carregar os detalhes do produto:', product.productId.id));
        }
    }, [product.productId]);

    if (!productDetail) {
        return <TitleComponent title="Carregando..." />;
    } else {
        return (
            <ScrollView>

                <Center>
                    <BestProductComponent
                        key={productDetail.id}
                        id={productDetail.id}
                        name={productDetail.name}
                        price={productDetail.price ? 'R$ ' + productDetail.price.toFixed(2) : ''}
                        photo={productDetail.photo1}
                        promotion={productDetail.promotion}
                        description={productDetail.description}
                        onPress={() => console.log(productDetail.id)}
                    />

                    <View width={'90%'}>
                            <StyledButtonPressable  title={'Adicionar ao carrinho'} onPress={saveProduct}>
                            </StyledButtonPressable>
                    </View>
                </Center>

             
            </ScrollView>
        );
    }
}
