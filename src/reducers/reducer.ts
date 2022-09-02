import { ActionTypes } from "./actions";
import { produce } from 'immer'

interface coffeesProps {
    id: number;
    name: string;
    tags: string[];
    description: string;
    price: number;
    img: string;
    amount: number;
}

export function OrderReducer(order: coffeesProps, action: any) {
    switch (action.type) {
        case ActionTypes.INCRESE:
            return order.amount + 1

        case ActionTypes.DECRESE:
            if (order.amount !== 1) {
                return order.amount - 1
            }
    }
}