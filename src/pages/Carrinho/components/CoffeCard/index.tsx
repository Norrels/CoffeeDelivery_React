import { ButtonContainer, CardContainer, RemoveButton, TextContainer } from "./style";
import Expresso from '../../../../assets/Expresso.svg'
import { Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { priceFormatter } from "../../../../utils/formatter";
import { coffeesProps } from "../../../../coffees";

interface CoffeeCardProps {
    order: coffeesProps
}

export function CoffeCard({order} : CoffeeCardProps) {


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
                            // onClick={handledecreseAmount}
                            >-</button>
                            <p>{order.amount}</p>
                            <button type="button" >+</button>
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