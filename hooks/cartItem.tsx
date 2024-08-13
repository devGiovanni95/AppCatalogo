import React, { createContext, useState } from 'react';

// Defina o tipo de cada produto
interface Product {
    id: number;
    titulo: string;
    price: string;
    quantidade: number;
    image: string;
}

// Defina o tipo do contexto
interface CartContextType {
    products: Product[];
    updateProductQuantity: (id: number, delta: number) => void;
}

// Crie o contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Crie o provider do contexto
// export const CartProvider = ({ children }:any) => {
//     const [products, setProducts] = useState([
    export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const [products, setProducts] = useState<Product[]>([
        // { id: 0, titulo: "Vela 1", price: "15,00", quantidade: 12, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
        // { id: 1, titulo: "Adocicado", price: "20,00", quantidade: 4, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
        // { id: 2, titulo: "Frutado", price: "5,00", quantidade: 3, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
        // { id: 3, titulo: "Amadeirado", price: "7,50", quantidade: 5, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
        // { id: 4, titulo: "Amadeirado", price: "7,50", quantidade: 5, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
        // { id: 5, titulo: "Amadeirado", price: "7,50", quantidade: 5, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
        // { id: 6, titulo: "Amadeirado", price: "7,50", quantidade: 5, image: 'https://pifatec.s3.us-east-2.amazonaws.com/image2.png' },
    ]);

    //atualiza os dados pra mais ou pra menos 
    const updateProductQuantity = (id: number, delta: number) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, quantidade: product.quantidade + delta } : product
            )
        );
    };

    //adicionar um produto na lista 
    const addProduct = (product: Product) => {
        setProducts(prevProducts => [...prevProducts, product]);
    };

    return (
        <CartContext.Provider value={{ products, updateProductQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
