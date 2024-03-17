import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from '@gluestack-ui/themed';
import TitleComponent from '../components/TitleComponent';
import BestProductComponent from '../components/BestProductComponent';
import { ProductContext } from './products';

export default function ProductDetails() {
    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string
    }

    const productId = useContext(ProductContext);
    console.log(productId)

    const [list, setList] = useState<IProductItem[]>([]);
    console.log(list)
    
    useEffect(() => {
        fetch(`https://api-catalogo-pi.onrender.com/product/${productId}`)
            .then(response => response.json())
            .then(json => setList(json))
            .catch(error => console.error('Erro ao carregar a lista de produtos:', error));
    }, [productId]); 

    if (!list) {
        return <TitleComponent title="Carregando..." />;
    } else {
        return (
            <ScrollView>
                {list.map((item, index) => (
                    <BestProductComponent
                        key={item.id} 
                        id={item.id} 
                        name={item.name} 
                        price={'R$ ' + item.price.toFixed(2)} 
                        photo={item.photo1} 
                        promotion={item.promotion} 
                        description={item.description} 
                        onPress={() => console.log('Realizando o pedido')}
                    />
                ))}
            </ScrollView>
        );
    }
}
