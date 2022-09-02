import { FormContainer } from "./components/Payment";
import { Summary } from "./components/Summary";
import { CarrinhoContainer, CarrinhoContent } from "./style";

export function Carrinho() {
    return (
        <CarrinhoContainer>
            <CarrinhoContent>
                <FormContainer />
                <Summary />
            </CarrinhoContent>
        </CarrinhoContainer>
    )
}