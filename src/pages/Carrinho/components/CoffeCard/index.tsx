import {
  ButtonContainer,
  CardContainer,
  RemoveButton,
  TextContainer,
} from "./style";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../../../contexts/OrderContext";
import { priceFormatter } from "../../../../utils/formatter";
import { coffeesProps } from "../../../../coffees";

interface CoffeeCardProps {
  coffee: coffeesProps;
}

export function CoffeCard({ coffee }: CoffeeCardProps) {
  const { removeItemFromOrder, increseByOne, decreseByOne } =
    useContext(OrderContext);

  function handleIncreseAmount() {
    increseByOne(coffee);
  }

  function handleDecreseAmount() {
    coffee.amount > 1 && decreseByOne(coffee);
  }

  function handleRemoveFromOrder() {
    removeItemFromOrder(coffee.id);
  }

  return (
    <CardContainer>
      <TextContainer>
        <img src={coffee.img} alt="" />

        <div>
          <p>{coffee.name}</p>

          <ButtonContainer>
            <span>
              <button type="button" onClick={handleDecreseAmount}>
                <Minus color="#8047F8" size={10} />
              </button>
              <p>{coffee.amount}</p>
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

      <strong>{priceFormatter.format(coffee.amount * coffee.price)}</strong>
    </CardContainer>
  );
}
