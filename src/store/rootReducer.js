import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import pokemonListReducer from './PokemonList/reducer';
import singlePokemonReducer from './SinglePokemon/reducer';

export default function rootReducer(history) {
  const reducerMap = {
    pokemonList: pokemonListReducer,
    singlePokemon: singlePokemonReducer,
    router: connectRouter(history),
  };

  return combineReducers(reducerMap);
}
