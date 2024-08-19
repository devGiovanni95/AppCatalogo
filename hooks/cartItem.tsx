import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Defina o tipo de cada produto
interface Product {
    id: number;
    name: string;
    price: string;
    quantidade: number;
    image: string;
}

// Defina o tipo do contexto
interface CartContextType {
    products: Product[];
    updateProductQuantity: (id: number, delta: number) => void;
    addProduct: (product: Product) => void;
}

// Crie o contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

    export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const [products, setProducts] = useState<Product[]>([]);

        // Carregar os dados do AsyncStorage ao iniciar
        useEffect(() => {
            const loadProducts = async () => {
                const storedProducts = await AsyncStorage.getItem('products');
                if (storedProducts) {
                    setProducts(JSON.parse(storedProducts));
                }
            };
            loadProducts();
        }, []);

        // Salvar os dados no AsyncStorage sempre que products mudar
        useEffect(() => {
            const saveProducts = async () => {
                await AsyncStorage.setItem('products', JSON.stringify(products));
            };
            saveProducts();
        }, [products]);
        
        //atualiza os dados pra mais ou pra menos 
        const updateProductQuantity = (id: number, delta: number) => {
     /*       setProducts(prevProducts =>
                prevProducts.map(product =>
                    product.id === id ? { ...product, quantidade: product.quantidade + delta } : product
                )
            );*/

            setProducts(prevProducts => {
                const updatedProducts = prevProducts
                    .map(product =>
                        product.id === id
                            ? { ...product, quantidade: product.quantidade + delta }
                            : product
                    )
                    .filter(product => product.quantidade > 0); // Remove produtos com quantidade <= 0
                return updatedProducts;
            });
            
        };

        //adicionar um produto na lista 
        const addProduct = (product: Product) => {
            setProducts(prevProducts => {
                const productIndex = prevProducts.findIndex(p => p.id === product.id);
    
                if (productIndex > -1) {
                    // Se o produto já existe, atualize a quantidade
                    const updatedProducts = [...prevProducts];
                    updatedProducts[productIndex].quantidade += product.quantidade;
                    return updatedProducts;
                } else {
                    // Caso contrário, adicione o novo produto
                    return [...prevProducts, product];
                }
            });
        };

        return (
            <CartContext.Provider value={{ products, updateProductQuantity, addProduct }}>
                {children}
            </CartContext.Provider>
        );
};
