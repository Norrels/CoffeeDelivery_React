import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { coffeesProps } from "../coffees";


interface OrderContextType {
    order: coffeesProps[]
    addOnOrder: (coffee: coffeesProps) => void
    setTotalPrice: (coffee: coffeesProps) => void
}

interface OrderContextProviderProps {
    children: ReactNode
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


    function setTotalPrice(coffee: coffeesProps){
        const updateCoffee = order.map(coffees => {
            if (coffees.id === coffee.id) {
                coffee.amount = coffee.amount
            }
            return coffees
        })
        setOrder(updateCoffee)
    }


return (
    <OrderContext.Provider
        value={{
            order,
            addOnOrder,
            setTotalPrice
        }}>
        {children}
    </OrderContext.Provider>
)
}