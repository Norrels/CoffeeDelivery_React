import { coffeesProps } from "../coffees";
import { ActionTypes } from "./actions";

interface OrderState {
  order: coffeesProps[];
}

export function OrderReduce(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ON_ORDER:
      let alredyOnList = false;
      const already = state.order.map((coffe) => {
        if (action.payload.coffee.id === coffe.id) {
          action.payload.coffee.amount = coffe.amount;
          alredyOnList = true;
        }
        return coffe;
      });
      return {
        ...state,
        order: alredyOnList ? already : [...state.order, action.payload.coffee],
      };

    case ActionTypes.REMOVE_ON_ORDER:
      const OrderWithoutDeletedOne = state.order.filter((order) => {
        return order.id != action.payload.id;
      });
      return {
        ...state,
        order: OrderWithoutDeletedOne,
      };

    case ActionTypes.INCRESE_BY_ONE:
      console.log("Passou no reducer");
      const updateOrderIncrese = state.order.map((coffee) => {
        if (coffee.id === action.payload.coffee.id) {
          coffee.amount += 1;
          console.log(coffee.amount);
        }
        return coffee;
      });
      return {
        ...state,
        order: updateOrderIncrese,
      };

    case ActionTypes.DECRESE_BY_ONE:
      const updateOrderDescrese = state.order.map((coffee) => {
        if (coffee.id === action.payload.coffee.id) {
          coffee.amount -= 1;
          console.log(coffee.amount);
        }
        return coffee;
      });
      return {
        ...state,
        order: updateOrderDescrese,
      };

    default:
      return state;
  }
}
