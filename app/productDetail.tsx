import React, { useContext, useEffect, useState } from 'react'
import { ScrollView } from '@gluestack-ui/themed'
import TitleComponent from '../components/TitleComponent'
import BestProduct from '../components/BestProduct'
import { useProduct } from '../hooks/productDetails'
import { router } from 'expo-router'
import { CartContext } from '../hooks/cartItem'

export default function ProductDetails() {
    const product = useProduct(); // Obtenha o ID do produto usando useProduct

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


    //logica pra adicionar o produto no carrinho
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('AddProductComponent must be used within a CartProvider');
    }

    const { addProduct } = context;

    const handleAddProduct = () => {
        console.log('entrou')
        const newProduct = { 
            id: productDetail?.id,
            name: productDetail?.name,
            price: productDetail?.price,
            quantidade: 1,
            image: productDetail?.photo1
        };
        console.log('produto',newProduct)
        addProduct(newProduct);
        router.push('cart1');
    };
    
    




    if (!productDetail) {
        return <TitleComponent title="Carregando..." />;
    } else {
        return (
            <ScrollView>
                <BestProduct
                    key={productDetail.id}
                    id={productDetail.id}
                    name={productDetail.name}
                    price={productDetail.price ? 'R$ ' + productDetail.price.toFixed(2) : ''}
                    photo={productDetail.photo1}
                    promotion={productDetail.promotion}
                    description={productDetail.description}
                    onPress={()=> {handleAddProduct()}}
                //     onPress={() => {product.setProductId({id: productDetail.id})
                //     router.push('/requestOrder')
                // }}
                />
            </ScrollView>
        );
    }
}
