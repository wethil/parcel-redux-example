import React from 'react';
import { getLastPath, capitalizeFirstLetter, getPokiImage } from '../../../utilities/stringUtils';
import PropTypes from 'prop-types';
import '../HomePage.scss';

const PokemonCard = ({ name, dispatchedPush, index, fetchSinglePokemon, url, isFiltered }) => {
  const clickPokemonCard = () => {
    fetchSinglePokemon(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
      () => dispatchedPush(`/${name}`)
    );
  };
  const pokemonId = getLastPath(url, true);
  const pokiImage = getPokiImage(pokemonId);
  return (
    <div
      className={isFiltered ? 'hidden' : 'pokemonCard'}
      onClick={clickPokemonCard}
      onKeyDown={clickPokemonCard}
      role='link'
      tabIndex={index}
    >
      <div>
        <img
          className={'pokemonImage'}
          alt={name}
          align={'center'}
          // src={`http://pokestadium.com/sprites/xy/${name}.gif`}
          src={pokiImage}
        />
      </div>
      <div> {capitalizeFirstLetter(name)} </div>
    </div>
  );
};

PropTypes.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  dispatchedPush: PropTypes.func,
  index: PropTypes.number,
  fetchSinglePokemon: PropTypes.func,
  isFiltered: PropTypes.bool,
};

export default PokemonCard;

