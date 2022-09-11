import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import Entregador from '../../assets/Entregador.svg'
import { IconContainer } from "../Home/style";
import { InfoContainer, InfoContext, SucessContainer, SucessWrapper, TextContainer } from "./style";

export function Success() {
    const storedOrderAsJson = localStorage.getItem('order')

    let finalOrder
    if(storedOrderAsJson){
        finalOrder = JSON.parse(storedOrderAsJson)
    }

    return (
        <SucessWrapper>
            <TextContainer>
                <h1>Uhu! Pedido Confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você </p>
            </TextContainer>


            <SucessContainer>


                <InfoContainer>
                    <InfoContext>
                        <IconContainer statusColor="coffee"><MapPin weight="fill" color="#FFF" size={30} /></IconContainer>
                        <div>
                            <p>Entrega em {finalOrder.adress.rua}, {finalOrder.adress.numero} </p>
                            <p>{finalOrder.adress.cidade} - {finalOrder.adress.uf}</p>
                        </div>

                    </InfoContext>
                    <InfoContext>
                        <IconContainer statusColor="timer"><Timer weight="fill" color="#FFF" size={30} /></IconContainer>
                        <div>
                            <p>Previsão de entrega</p>
                            <p>20 min - 30 min</p>
                        </div>

                    </InfoContext>
                    <InfoContext>
                        <IconContainer statusColor="cart"><CurrencyDollar weight="fill" color="#FFF" size={30} /></IconContainer>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p>{finalOrder.paymentMethod === "debito" ? "Cartão de Débito" : finalOrder.paymentMethod === "credito" ? "Cartão de Credito" : "Em dinheiro"}</p>
                        </div>

                    </InfoContext>
                </InfoContainer>

                <img src={Entregador} alt="" />
            </SucessContainer>
        </SucessWrapper>

    )
}