import axios from 'axios';
import * as actions from './actions.js';

const { createFetchSinglePokemonSuccess } = actions;

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';


const getApi = (payload) => axios.get(payload);


function* errorHandler(result) {
  const { createFetchSinglePokemonError } = actions;
  yield put(createFetchSinglePokemonError(result));
}

function *fetchSinglePokemon(action) {
  const { payload, callback } = action;
  try {
    const { data } = yield call(getApi, payload);
    yield put(createFetchSinglePokemonSuccess(data, payload));
    if (callback) callback();
  } catch (error) {
    errorHandler();
  }
}

export default function* () {
  yield takeLatest(actions.FETCH_SINGLE_POKEMON, fetchSinglePokemon);
}
