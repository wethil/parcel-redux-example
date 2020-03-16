export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export function createFetchPokemons(payload, callback) {
  return {
    type: FETCH_POKEMONS,
    payload,
    callback,
  };
}

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export function createFetchPokemonsRequest(payload, callback) {
  return {
    type: FETCH_POKEMONS_REQUEST,
    payload,
    callback,
  };
}


export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export function createFetchPokemonsSuccess(payload, callback) {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload,
    callback,
  };
}


export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';
export function createFetchPokemonsError(payload, callback) {
  return {
    type: FETCH_POKEMONS_ERROR,
    payload,
    callback,
  };
}
