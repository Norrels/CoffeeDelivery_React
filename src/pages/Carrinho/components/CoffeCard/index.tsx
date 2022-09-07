import {
  ButtonContainer,
  CardContainer,
  RemoveButton,
  TextContainer,
} from "./style";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { priceFormatter } from "../../../../utils/formatter";
import { coffeesProps } from "../../../../coffees";

interface CoffeeCardProps {
  order: coffeesProps;
}

export function CoffeCard({ order }: CoffeeCardProps) {
  const { setTotalPrice, removeItemFromOrder } = useContext(OrderContext);

  const [amount, setAmount] = useState(order.amount);

  function handleIncreseAmount() {
    setAmount((state) => state + 1);
    order.amount = order.amount + 1;
    setTotalPrice(order);
  }

  function handleDecreseAmount() {
    if(amount > 1){
      setAmount((state) => state - 1);
      order.amount = order.amount - 1;
      setTotalPrice(order);
    }
  }

  function handleRemoveFromOrder(){
    removeItemFromOrder(order.id)
  }

  return (
    <CardContainer>
      <TextContainer>
        <img src={order.img} alt="" />

        <div>
          <p>{order.name}</p>

          <ButtonContainer>
            <span>
              <button type="button" onClick={handleDecreseAmount}>
                <Minus color="#8047F8" size={10} />
              </button>
              <p>{amount}</p>
              <button type="button" onClick={handleIncreseAmount}>
                <Plus color="#8047F8" size={10} />
              </button>
            </span>

            <RemoveButton type="button" onClick={handleRemoveFromOrder}>
              <Trash color="#8047F8" />
              Remover
            </RemoveButton>
          </ButtonContainer>
        </div>
      </TextContainer>

      <strong>{priceFormatter.format(order.amount * order.price)}</strong>
    </CardContainer>
  );
}
