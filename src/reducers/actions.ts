import { coffeesProps } from "../coffees";

export enum ActionTypes {
  ADD_ON_ORDER = "ADD_ON_ORDER",
  REMOVE_ON_ORDER = "REMOVE_ON_ORDER",
  INCRESE_BY_ONE = "INCRESE_BY_ONE",
  DECRESE_BY_ONE = "DECRESE_BY_ONE",
}

export function addOnOrderAction(coffee: coffeesProps) {
  return {
    type: ActionTypes.ADD_ON_ORDER,
    payload: {
      coffee,
    },
  };
}

export function removeOnOrderAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ON_ORDER,
    payload: {
      id,
    },
  };
}

export function increseByOneAction(coffee : coffeesProps){
  return {
    type: ActionTypes.INCRESE_BY_ONE,
    payload: {
      coffee,
    }
  };
}

export function decreseByOneAction(coffee : coffeesProps){
  return {
    type: ActionTypes.DECRESE_BY_ONE,
    payload: {
      coffee,
    }
  };
}
