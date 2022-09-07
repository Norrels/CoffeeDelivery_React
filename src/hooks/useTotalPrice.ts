import { Coffee } from "phosphor-react"
import { useContext } from "react"
import { coffees } from "../coffees"
import { OrderContext } from "../contexts/OrderContext"

export function useTotalPrice(){

    const { order } = useContext(OrderContext)

    const totalPrice = order.reduce((acc, coffee) => {
        acc += coffee.price * coffee.amount
        return acc
    }, 0)

    return totalPrice;
}
