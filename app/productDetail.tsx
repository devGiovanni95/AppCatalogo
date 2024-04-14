import React, { useEffect, useState } from 'react'
import { ScrollView } from '@gluestack-ui/themed'
import TitleComponent from '../components/TitleComponent'
import BestProductComponent from '../components/BestProductComponent'
import { useProduct } from '../hooks/productDetails'
import { router } from 'expo-router'

export default function ProductDetails() {
    const product = useProduct()

    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string
    
    }

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
                <BestProductComponent
                    key={productDetail.id}
                    id={productDetail.id}
                    name={productDetail.name}
                    price={productDetail.price ? 'R$ ' + productDetail.price.toFixed(2) : ''}
                    photo={productDetail.photo1}
                    promotion={productDetail.promotion}
                    description={productDetail.description}
                    onPress={() => {product.setProductId({id: productDetail.id})
                    router.push('/requestOrder')}}
                />
            </ScrollView>
        );
    }
}
