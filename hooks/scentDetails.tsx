import { createContext, useContext, useState, ReactNode } from "react";
import {IScentContext, IScentID, IScentProviderProps } from "../interfaces/scent";
import { router } from "expo-router";

// Defining ScentContext
const ScentContext = createContext<IScentContext>({} as IScentContext);

// Defining ScentProvider
const ScentProvider = ({ children }: IScentProviderProps): ReactNode => {
    const [scentId,setScentId] = useState<IScentID>({id:0})


    return (
        <ScentContext.Provider value={{scentId, setScentId}}>
            {children}
        </ScentContext.Provider>
    );
};

// Exporting ProductProvider
export default ScentProvider;

// Defining useScent hook
export function useScent(){
    const context = useContext(ScentContext);
    return context;
}
