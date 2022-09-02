import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import CofferHeader from '../../../../assets/CoffeHeader.svg'
import { HomeHeaderContainer, HomeHeaderContent, IconContainer, TextContent } from "./style";

export function HeaderHome() {
    return (
        <HomeHeaderContainer>
            <HomeHeaderContent>
                <TextContent>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br/> qualquer hora</p>

                    <div>
                        <IconContainer statusColor="cart">
                            <ShoppingCart weight="fill" size={36} color="#fff" />
                            Compra simples e segura
                        </IconContainer>
                        <IconContainer statusColor="package">
                            <Package weight="fill" size={36} color="#fff" />
                            Embalagem mantém o café intacto
                        </IconContainer>
                        <IconContainer statusColor="timer">
                            <Timer weight="fill" size={36} color="#fff" />
                            Entrega rápida e rastreada
                        </IconContainer>
                        <IconContainer statusColor="coffee">
                            <Coffee weight="fill" size={36} color="#fff" />
                            O café chega fresquinho até você
                        </IconContainer>
                    </div>

                </TextContent>

                <img src={CofferHeader} alt="" />
            </HomeHeaderContent>
        </HomeHeaderContainer >


    )
}