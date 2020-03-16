import * as actions from './actions.js';
import { createSelector } from 'reselect';

const initialState = {
  pokemons: [],
  status: {
    busy: true,
    success: false,
    error: false
  }
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_POKEMONS:
      return {
        ...state,
      };
    case actions.FETCH_POKEMONS_REQUEST: {
      return {
        ...state,
        status: {
          busy: true,
          success: false,
          error: false,
        }
      };
    }
    case actions.FETCH_POKEMONS_SUCCESS: {
      const { payload: {
        pokemon_species,
      } } = action;
      const newPokemonArray = [...pokemon_species];
      return {
        pokemons: newPokemonArray,
        status: {
          busy: false,
          success: true,
          error: false,
        }
      };
    }
    case actions.FETCH_POKEMONS_ERROR:
      return {
        pokemons: [],
        status: {
          busy: false,
          success: false,
          error: false,
        }
      };
    default:
      return state;
  }
}

export const getPokemonList = createSelector(
  state => state.pokemonList,
  result => result
);
