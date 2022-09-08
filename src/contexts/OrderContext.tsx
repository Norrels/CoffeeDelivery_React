import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { coffeesProps } from "../coffees";
import { addOnOrderAction, removeOnOrderAction, increseByOneAction, decreseByOneAction } from "../reducers/actions";
import { OrderReduce } from "../reducers/reducer";

interface OrderContextType {
  order: coffeesProps[];
  addOnOrder: (coffee: coffeesProps) => void;
  increseByOne: (coffee: coffeesProps) => void;
  decreseByOne: (coffee: coffeesProps) => void;
  removeItemFromOrder: (id: string) => void;
}

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  
    const [orderState, dispatch] = useReducer(OrderReduce, {
    order: [],
  });

  const { order } = orderState;

  function addOnOrder(coffee: coffeesProps) {
    dispatch(addOnOrderAction(coffee));
  }

  function removeItemFromOrder(id: string) {
    dispatch(removeOnOrderAction(id));
  }

  function increseByOne(coffee: coffeesProps){
    console.log("passou aqui context")
    dispatch(increseByOneAction(coffee));
  }

  function decreseByOne(coffee: coffeesProps){
    dispatch(decreseByOneAction(coffee));
  }
  
  return (
    <OrderContext.Provider
      value={{
        order,
        addOnOrder,
        removeItemFromOrder,
        increseByOne,
        decreseByOne
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
