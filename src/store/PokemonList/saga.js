import axios from 'axios';
import * as actions from './actions.js';

const { createFetchPokemonsSuccess } = actions;

import {
  call,
  put,
  takeLatest,
  // all,
} from 'redux-saga/effects';


const getApi = () => axios.get('/generation/1');


function* errorHandler(result) {
  const { createFetchPokemonsError } = actions;
  yield put(createFetchPokemonsError(result));
}

function *fetchPokemonList() { // action as parameter
  try {
    const { data } = yield call(getApi);
    yield put(createFetchPokemonsSuccess(data));
  } catch (error) {
    errorHandler();
  }
}

export default function* () {
  yield takeLatest(actions.FETCH_POKEMONS, fetchPokemonList);
}
