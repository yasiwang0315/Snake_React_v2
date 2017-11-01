import { handleActions } from 'redux-actions';
import * as Immutable from 'immutable';
import { Row } from '../constants';
import { getStore } from '../router';
import { getColumn } from '../selector/column';
import { getModal } from '../selector/modal';

let column = 12;
let modal = 1;
setTimeout(() => {
  column = getColumn(getStore().getState());
  modal = getModal(getStore().getState());
});
const index = modal === 1 ? 3 : 1;
const x =  Math.floor(Math.random() * (column - index)) + 1;

const y =  Math.floor(Math.random() * (Row - index)) + 1;
if (modal === 0) {
  console.assert(x >= 0 && x < column, `bad assert modal:${modal}, x:${x}`);
  console.assert(y >= 0 && y < Row, `bad assert modal:${modal}, x:${y}`);
} else {
  console.assert(modal === 1 && x >= 1 && x < column - 1, `bad assert modal:${modal}, x:${x}`);
  console.assert(modal === 1 && y >= 1 && y < Row - 1, `bad assert modal:${modal}, x:${y}`);
}
const IFoodRecord = Immutable.Record({
  food: Immutable.fromJS(
    {
      x: x,
      y: y
    }
  )
});

export class IFood extends IFoodRecord {
  food: any;
}

const initialState = new (IFood);

export default handleActions({
  'set food'(state: IFood = initialState) {
    const modal = getModal(getStore().getState());
    const index = modal === 1 ? 3 : 1;
    const x =  Math.floor(Math.random() * (column - index)) + 1;
    const y =  Math.floor(Math.random() * (Row - index)) + 1;
    const food = {
      x: x,
      y: y
    };
    return state.set('food', Immutable.fromJS(food));
  }
}, initialState);