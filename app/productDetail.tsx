import React, { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import TitleComponent from '../components/TitleComponent';
import { useProduct } from '../hooks/productDetails';

export default function ProductDetails() {

    interface IProductItem {
        id: number,
        name: string,
        price: number,
        photo1: string,
        promotion: boolean,
        description: string
    }

    const product = useProduct();
    const [productDetail, setProductDetail] = useState<IProductItem | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [buttonColor, setButtonColor] = useState('#FF5733');

    useEffect(() => {
        if (product.productId) {
            fetch(`https://api-catalogo-pi.onrender.com/product/${product.productId.id}`)
                .then(response => response.json())
                .then(json => {
                    setProductDetail(json);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Erro ao carregar os detalhes do produto:', product.productId.id);
                    setLoading(false);
                });
        }
    }, [product.productId]);

    // Função para o botão comprar
    const handleBuyButtonClick = () => {
        setButtonColor('#3CB371');
    };

    if (loading) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!productDetail) {
        return (
            <View style={styles.container}>
                <TitleComponent title={'Nenhum detalhe do produto disponível'} />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <TitleComponent title={'Portfólio completo/'} />
            <Image style={styles.image} source={{ uri: productDetail.photo1 }} />
           
                <Text style={styles.itemName}>{productDetail.name}</Text>
                <Text style={styles.itemDescription}>{productDetail.description}</Text>
                <Text style={styles.itemPrice}>{productDetail.price ? 'R$ ' + productDetail.price.toFixed(2) : ''}</Text>
                {productDetail.promotion && <Text style={styles.itemPromotion}>Em promoção</Text>}
                <TouchableOpacity
                    style={[styles.buyButton, { backgroundColor: buttonColor }]}
                    onPress={handleBuyButtonClick}
                >
                    <Text style={styles.buyButtonText}>Comprar</Text>
                </TouchableOpacity>
       
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
    },
    itemDetail: {
        width: '90%',
        borderRadius: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333',
        textAlign: 'center',
    },
    itemDescription: {
        fontSize: 16,
        marginBottom: 15,
        color: '#555555',
        textAlign: 'center',
    },
    itemPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FF5733',
        textAlign: 'center',
    },
    itemPromotion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF5733',
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        width: '90%',
        height: '35%',
        resizeMode: 'cover',
        borderRadius: 20,
        marginBottom: 20,
    },
    buyButton: {
        width: '70%',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#FF5733',
    },
    buyButtonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
