import { ReactNode } from "react"


export interface ICategoryID {
    id: number
}

export interface ICategoryContext {
    categoryId: ICategoryID
    setCategoryId: (categoryId: ICategoryID) => void
}

export interface ICategoryProviderProps {
    children: ReactNode
}
