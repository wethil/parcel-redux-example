export const FETCH_SINGLE_POKEMON = 'FETCH_SINGLE_POKEMON';
export function createFetchSinglePokemon(payload, callback) {
  return {
    type: FETCH_SINGLE_POKEMON,
    payload,
    callback
  };
}

export const FETCH_SINGLE_POKEMON_REQUEST = 'FETCH_SINGLE_POKEMON_REQUEST';
export function createFetchSinglePokemonRequesst(payload, callback) {
  return {
    type: FETCH_SINGLE_POKEMON_REQUEST,
    payload,
    callback,
  };
}


export const FETCH_SINGLE_POKEMON_SUCCESS = 'FETCH_SINGLE_POKEMON_SUCCESS';
export function createFetchSinglePokemonSuccess(payload) {
  return {
    type: FETCH_SINGLE_POKEMON_SUCCESS,
    payload,
  };
}


export const FETCH_SINGLE_POKEMON_ERROR = 'FETCH_SINGLE_POKEMON_ERROR';
export function createFetchSinglePokemonError(payload) {
  return {
    type: FETCH_SINGLE_POKEMON_ERROR,
    payload,
  };
}
