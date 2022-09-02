import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { OrderContext } from "../../../../contexts/OrderContext";
import { priceFormatter } from "../../../../utils/formatter";
import { CoffeCard } from "../CoffeCard";
import { ConfirmButton, PriceContainer, SummartCointainer, SummaryContent, TextContent } from "./style";

export function Summary() {

    const navigate = useNavigate()
    const { order, fullOrder } = useContext(OrderContext)

    
    return (
        <SummartCointainer>
            <h2>Cafés selecionados</h2>

            <SummaryContent>
                {
                    order.map(orderIndex => {
                        return (
                            <CoffeCard order={orderIndex} key={orderIndex.id} />
                        )
                    })
                }

                <PriceContainer>
                    <TextContent>
                        <p>Total de itens</p>
                         <p>{priceFormatter.format(fullOrder.totalPrice)}</p> 
                    </TextContent>
                    <TextContent>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </TextContent>
                    <TextContent>
                        <strong>Total</strong>
                        <strong>{priceFormatter.format(fullOrder.totalPrice === 0 ? 0 : fullOrder.totalPrice + 3.50)}</strong>
                    </TextContent>
                </PriceContainer>

                <ConfirmButton onClick={() => navigate('sucesso')} disabled={order.length <= 0}>CONFIRMAR PEDIDO</ConfirmButton>
            </SummaryContent>

        </SummartCointainer>
    )
}