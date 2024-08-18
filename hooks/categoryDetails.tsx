import { createContext, useContext, useState, ReactNode } from "react";
import {ICategoryContext, ICategoryID, ICategoryProviderProps } from "../interfaces/categoryID"



const CategoryContext = createContext<ICategoryContext>({} as ICategoryContext);

const CategoryProvider = ({ children }: ICategoryProviderProps): ReactNode => {
    const [categoryId,setCategoryId] = useState<ICategoryID>({id:0})


    return (
        <CategoryContext.Provider value={{categoryId, setCategoryId}}>
            {children}
        </CategoryContext.Provider>
    );
};


export default CategoryProvider;

// Defining useProduct hook
export function useCategory(){
    const context = useContext(CategoryContext);
    return context;
}