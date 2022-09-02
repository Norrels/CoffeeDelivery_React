
export enum ActionTypes {
  INCRESE = 'INCRESE_ORDER',
  DECRESE = 'DECRESE_ORDER',
}


export function markCurrentCyclasAsFinishedAction() {
  return {
    type: ActionTypes.INCRESE,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.DECRESE,
  }
}
