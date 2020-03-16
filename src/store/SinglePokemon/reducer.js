import * as actions from './actions.js';
import { createSelector } from 'reselect';

const initialState = {
  pokemonSpec: {},
  status: {
    busy: true,
    success: false,
    error: false
  }
};

export default function pokemonListReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_SINGLE_POKEMON:
      return {
        ...state,
      };
    case actions.FETCH_SINGLE_POKEMON_REQUEST: {
      return {
        ...state,
        status: {
          busy: true,
          success: false,
          error: false,
        }
      };
    }
    case actions.FETCH_SINGLE_POKEMON_SUCCESS: {
      /* I could use lodash for the code below but not necessary for now  */
      const { payload } = action;
      const pokemonSpec = {
        id: payload.id,
        name: payload.name,
        height: payload.height,
        weight: payload.weight,
        type: payload.types.map(t => t.type.name),
        abilities: payload.abilities.map(a=> a.ability.name),
      };
      return {
        pokemonSpec,
        status: {
          busy: false,
          success: true,
          error: false,
        }
      };
    }
    case actions.FETCH_SINGLE_POKEMON_ERROR:
      return {
        pokemonSpec: [],
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

export const getSinglePokemon = createSelector(
  state => state.singlePokemon,
  result => result
);
