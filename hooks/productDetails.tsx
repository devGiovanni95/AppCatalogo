import { createContext, useContext, useState, ReactNode } from "react";
import {IProductContext, IProductID, IProductProviderProps } from "../interfaces/productId";



const ProductContext = createContext<IProductContext>({} as IProductContext);

const ProductProvider = ({ children }: IProductProviderProps): ReactNode => {
    const [productId,setProductId] = useState<IProductID>({id:0})


    return (
        <ProductContext.Provider value={{productId, setProductId}}>
            {children}
        </ProductContext.Provider>
    );
};


export default ProductProvider;

// Defining useProduct hook
export function useProduct(){
    const context = useContext(ProductContext);
    return context;
}
