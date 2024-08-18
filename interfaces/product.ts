import { ReactNode } from "react"


export interface IProductID {
    id: number
}

export interface IProductContext {
    productId: IProductID
    setProductId: (productId: IProductID) => void
}

export interface IProductProviderProps {
    children: ReactNode
}
