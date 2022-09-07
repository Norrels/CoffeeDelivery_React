import { FormContainer } from "./components/Payment";
import { Summary } from "./components/Summary";
import { CarrinhoContainer, CarrinhoContent } from "./style";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { coffeesProps } from "../../coffees";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { useTotalPrice } from "../../hooks/useTotalPrice";
import { useNavigate } from "react-router-dom";

export const adressInputs = z.object({
  cep: z.string(),
  bairro: z.string(),
  rua: z.string(),
  uf: z.string(),
  cidade: z.string(),
  numero: z.string(),
  complemento: z.string(),
  paymentMethod: z.enum(['dinheiro', 'debito', 'credito']),
});

interface AdressProps {
    cep: string;
    bairro: string;
    rua: string;
    uf: string;
    cidade: string;
    numero: string;
    complemento: string;
}

interface FinalOrder {
  adress: AdressProps;
  order: coffeesProps[];
  paymentMethod: string;
  totalPrice: number;
  
}

export type AdressType = z.infer<typeof adressInputs>;

export function Carrinho() {
  const finalOrderForm = useForm<AdressType>();
  const totalPrice = useTotalPrice();
  const { order } = useContext(OrderContext);
  const navigate = useNavigate()

  const { handleSubmit } = finalOrderForm

  function handleBuyOrder(data: AdressType) {
    const finalOrder: FinalOrder = {
      adress: {
        cep: data.cep,
        bairro: data.bairro,
        rua: data.rua,
        uf: data.uf,
        cidade: data.cidade,
        numero: data.numero,
        complemento: data.complemento,
      },
      paymentMethod: data.paymentMethod,
      order: order,
      totalPrice: totalPrice.totalWithDelivery,
    };

    console.log(finalOrder);
    navigate("/carrinho/sucesso")
    
  }

  return (
    <CarrinhoContainer>
      <CarrinhoContent onSubmit={handleSubmit(handleBuyOrder)}>
        <FormProvider {...finalOrderForm}>
          <FormContainer />
        </FormProvider>
        <Summary />
      </CarrinhoContent>
    </CarrinhoContainer>
  );
}
