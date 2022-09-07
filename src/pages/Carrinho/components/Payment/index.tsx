import { set } from "immer/dist/internal";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useContext,
  useState,
} from "react";
import { coffeesProps } from "../../../../coffees";
import { api } from "../../../../lib/axios";
import * as z from "zod";
import { useFormContext, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormularioContainer,
  Input,
  InputsContainer,
  MethodContainer,
  PagamentoContainer,
  PaymentMethodButton,
} from "./style";
import { useForm } from "react-hook-form";
import { OrderContext } from "../../../../contexts/OrderContext";
import { useTotalPrice } from "../../../../hooks/useTotalPrice";
import { adressInputs, AdressType } from "../..";

export function FormContainer() {
  const { register, control } = useFormContext();

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
          <Input
            gridArea="cep"
            type="text"
            placeholder="CEP"
            {...register("cep")}
          />
          <Input
            gridArea="rua"
            type="text"
            placeholder="Rua"
            {...register("rua")}
          />
          <Input
            gridArea="numero"
            type="text"
            placeholder="Número"
            {...register("numero")}
          />
          <Input
            gridArea="complemento"
            type="text"
            placeholder="Complemento"
            {...register("complemento")}
          />
          <Input
            gridArea="bairro"
            type="text"
            placeholder="Bairro"
            {...register("bairro")}
          />
          <Input
            gridArea="cidade"
            type="text"
            placeholder="Cidade"
            {...register("cidade")}
          />
          <Input
            gridArea="uf"
            type="text"
            placeholder="UF"
            {...register("uf")}
          />
        </InputsContainer>
      </section>

      <PagamentoContainer>
        <div>
          <CurrencyDollar color="#8047F8" size={24} />
          <span>
            <strong>Pagamento</strong>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </div>
        <Controller
          control={control}
          name="paymentMethod"
          render={({ field }) => {
            return (
              <MethodContainer
              onValueChange={field.onChange}
              value={field.value}>
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
            );
          }}
        />
      </PagamentoContainer>
    </FormularioContainer>
  );
}
