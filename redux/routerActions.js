import * as types from './routersType';

export function goTo(place) {
  return {
    type: types.goTo,
    payload: place,
  };
}

export function goToWithReset(place) {
  return {
    type: types.goToWithReset,
    payload: place,
  };
}

export function goBack() {
  return {
    type: types.goBack,
  };
}
