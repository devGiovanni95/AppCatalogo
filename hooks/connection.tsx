import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { router } from "expo-router";
import NetInfo from '@react-native-community/netinfo';

// Defining ProductContext
const ConnectionContext = createContext<IConnectionContext>({} as IConnectionContext);

export interface IConnectionContext {
    isConnected: boolean
    setIsConnected: (value: boolean) => void
}

export interface IProductProviderProps {
    children: ReactNode
}

// Defining ProductProvider
const ProductProvider = ({ children }: IProductProviderProps): ReactNode => {
    const [isConnected, setIsConnected] = useState<boolean>(false);

    const updateConnectionStatus = (status: boolean) => {
        setIsConnected(status);
    };
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state: { type: any; isConnected: boolean | ((prevState: boolean | undefined) => boolean | undefined) | undefined; }) => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected);
        });

        // Verificar a conexão assim que o componente for montado
        NetInfo.fetch().then((state: { type: any; isConnected: boolean | ((prevState: boolean | undefined) => boolean | undefined) | undefined; }) => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);



    return (
        <ConnectionContext.Provider value={{isConnected, setIsConnected: updateConnectionStatus }}>
            {children}
        </ConnectionContext.Provider>
    );
};

// Exporting ProductProvider
export default ProductProvider;

// Defining useProduct hook
export function useConnection(){
    const context = useContext(ConnectionContext);
    return context;
}
