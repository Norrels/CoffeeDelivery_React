import { useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useTotalPrice } from "../../../../hooks/useTotalPrice";
import { priceFormatter } from "../../../../utils/formatter";
import { CoffeCard } from "../CoffeCard";
import { ConfirmButton, PriceContainer, SummartCointainer, SummaryContent, TextContent } from "./style";

export function Summary() {

    const { order } = useContext(OrderContext)
    const totalPrice = useTotalPrice()

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
                        <p>{priceFormatter.format(totalPrice.total)}</p> 
                    </TextContent>
                    <TextContent>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </TextContent>
                    <TextContent>
                        <strong>Total</strong>
                       <strong>{priceFormatter.format(totalPrice.total === 0 ? 0 : totalPrice.totalWithDelivery)}</strong>
                    </TextContent>
                </PriceContainer>

                <ConfirmButton type="submit" disabled={order.length <= 0}>CONFIRMAR PEDIDO</ConfirmButton>
            </SummaryContent>

        </SummartCointainer>
    )
}