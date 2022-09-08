import { useContext } from "react"
import { OrderContext } from "../contexts/OrderContext"

export function useTotalPrice(){

    const { order } = useContext(OrderContext)

    const totalPrice = order.reduce((acc, coffee) => {
        acc.total += coffee.price * coffee.amount
        acc.totalWithDelivery = acc.total + 3.50
        return acc
    }, {
        total: 0,
        totalWithDelivery: 0
    })

    return totalPrice;
}
