import { set } from "immer/dist/internal"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { ChangeEvent, FocusEvent, FormEvent, useState } from "react"
import { api } from "../../../../lib/axios"
import { FormularioContainer, Input, InputsContainer, MethodContainer, PagamentoContainer, PaymentMethodButton } from "./style"

interface AdressType {
    bairro : string
    localidade: string
    uf: string
    logradouro: string
} 

export function FormContainer() {
    const [newCep, setNewCep] = useState<AdressType>()

    async function fetchCEP(cep : string) {
        const response = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
        
        setNewCep(response.data)
        console.log(response.data)

    }

    function handleCepOnBlur(event : FocusEvent<HTMLInputElement>) {
        event.preventDefault()
        fetchCEP(event.target.value)
    }


    return (
        <FormularioContainer>
            <h2>Complete seu pedido</h2>

            <section>
                <div>
                    <MapPinLine color="#C47F17" size={24} />
                    <span>
                        <strong>Endereço de Entrega</strong>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </span>
                </div>
                <InputsContainer>
                    <Input gridArea="cep" type="text" name="" placeholder="CEP" onBlur={handleCepOnBlur} />
                    <Input gridArea="rua" type="text" name="" readOnly value={newCep?.logradouro || ''} placeholder="Rua" />
                    <Input gridArea="numero" type="text" name="" placeholder="Número" />
                    <Input gridArea="complemento" type="text" name="" placeholder="Complemento" />
                    <Input gridArea="bairro" type="text" name=""  value={newCep?.bairro || ''} readOnly placeholder="Bairro" />
                    <Input gridArea="cidade" type="text" name="" readOnly value={newCep?.localidade || ''} placeholder="Cidade" />
                    <Input gridArea="uf" type="text" name="" readOnly value={newCep?.uf || ''} placeholder="UF" />
                </InputsContainer>
            </section>

            <PagamentoContainer>
                <div>
                    <CurrencyDollar color="#8047F8" size={24} />
                    <span>
                        <strong>Pagamento</strong>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </span>
                </div>
                <MethodContainer>
                    <PaymentMethodButton value="credito">
                        <CreditCard color="#8047F8" size={18} />
                        <p>CARTÂO DE CRÉDITO</p>
                    </PaymentMethodButton>
                    <PaymentMethodButton value="debito">
                        <Bank color="#8047F8" size={18} />
                        <p>CARTÂO DE DÉBITO</p>
                    </PaymentMethodButton>
                    <PaymentMethodButton value="dinheiro">
                        <Money color="#8047F8" size={18} />
                        <p>DINHEIRO</p>
                    </PaymentMethodButton>

                </MethodContainer>

            </PagamentoContainer>


        </FormularioContainer>
    )
}
