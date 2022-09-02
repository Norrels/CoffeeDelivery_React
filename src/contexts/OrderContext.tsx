import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { coffeesProps } from "../coffees";


interface OrderContextType {
    order: coffeesProps[]
    fullOrder: fullOrde
    addOnOrder: (coffee: coffeesProps) => void
}

interface OrderContextProviderProps {
    children: ReactNode
}

interface fullOrde {
    coffess: coffeesProps[],
    totalPrice: number
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
    const [order, setOrder] = useState<coffeesProps[]>([])

    function addOnOrder(coffee: coffeesProps) {
        let alredyOnList = false
        const already = order.map(coffe => {
            if (coffee.id === coffe.id) {
                coffee.amount = coffe.amount
                alredyOnList = true
            }
            return coffe
        })
        alredyOnList ? setOrder(already) : setOrder([...order, coffee])
    }


    useEffect(() => {
        console.log(order)
    }, [order])

 


    const fullOrder: fullOrde = {
        coffess : order,
        totalPrice : order.reduce((acc, coffee) => {
            acc += coffee.price * coffee.amount
            return acc
        }, 0)
    }


return (
    <OrderContext.Provider
        value={{
            order,
            addOnOrder,
            fullOrder
        }}>
        {children}
    </OrderContext.Provider>
)
}