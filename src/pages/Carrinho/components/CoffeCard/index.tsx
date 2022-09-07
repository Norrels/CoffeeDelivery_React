import { ButtonContainer, CardContainer, RemoveButton, TextContainer } from "./style";
import Expresso from '../../../../assets/Expresso.svg'
import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { priceFormatter } from "../../../../utils/formatter";
import { coffeesProps } from "../../../../coffees";

interface CoffeeCardProps {
    order: coffeesProps
}

export function CoffeCard({order} : CoffeeCardProps) {
    const { setTotalPrice } = useContext(OrderContext)

    const [amount, setAmount] = useState(order.amount)
    
    function handleIncreseAmount(){
        setAmount((state) => state + 1)
        order.amount = order.amount + 1
        setTotalPrice(order)
    }

    function handleDecreseAmount(){
        setAmount((state) => state - 1)
        order.amount = order.amount - 1
        setTotalPrice(order)
    }

    return (
        <CardContainer>
            <TextContainer>
                <img src={order.img} alt="" />

                <div>
                    <p>{order.name}</p>

                    <ButtonContainer>
                        <span>
                            <button 
                            type="button"
                            onClick={handleDecreseAmount}
                            >-</button>
                            <p>{amount}</p>
                            <button 
                            type="button" 
                            onClick={handleIncreseAmount}
                            >+</button>
                        </span>

                        <RemoveButton
                           
                        >
                            <Trash color="#8047F8"/>
                            Remover
                        </RemoveButton>
                    </ButtonContainer>

                </div>

            </TextContainer>


            <strong>{priceFormatter.format(order.amount * order.price)}</strong>
        </CardContainer>
    )
}