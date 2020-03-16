import { spawn, all } from 'redux-saga/effects';
import PokemonListSaga from './PokemonList/saga';
import SinglePokemonSaga from './SinglePokemon/saga';

export default function* () {
  yield all([
    spawn(PokemonListSaga),
    spawn(SinglePokemonSaga)
  ]);
}
