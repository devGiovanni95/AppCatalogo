import { ReactNode } from "react"


export interface IScentID {
    id: number
}

export interface IScentContext {
    scentId: IScentID
    setScentId: (scentId: IScentID) => void
}

export interface IScentProviderProps {
    children: ReactNode
}
