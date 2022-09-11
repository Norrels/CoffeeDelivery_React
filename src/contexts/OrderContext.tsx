import {
  createContext,
  ReactNode,
  useReducer,
} from "react";
import { coffeesProps } from "../coffees";
import { addOnOrderAction, removeOnOrderAction, increseByOneAction, decreseByOneAction, cleanOrderAction } from "../reducers/actions";
import { OrderReduce } from "../reducers/reducer";

interface OrderContextType {
  order: coffeesProps[];
  cleanOrder: () => void;
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
    dispatch(increseByOneAction(coffee));
  }

  function decreseByOne(coffee: coffeesProps){
    dispatch(decreseByOneAction(coffee));
  }

  function cleanOrder(){
    dispatch(cleanOrderAction())
  }
  
  return (
    <OrderContext.Provider
      value={{
        order,
        addOnOrder,
        removeItemFromOrder,
        increseByOne,
        decreseByOne,
        cleanOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
