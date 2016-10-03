export const MULTI_OPEN = 'app/module/popups/MULTI_OPEN';
export const CLOSE = 'app/module/popups/CLOSE';

export default function reducer(state = [], action) {
  switch (action.type) {
    case MULTI_OPEN:
      return action.payload.concat(state);
    case CLOSE:
      return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
    default:
      return state;
  }
}
