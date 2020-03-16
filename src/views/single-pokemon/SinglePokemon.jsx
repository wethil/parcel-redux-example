import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSinglePokemon } from '../../store/SinglePokemon/reducer';
import { createFetchSinglePokemon } from '../../store/SinglePokemon/actions';
import { push } from 'connected-react-router';
import PokeBall from '../poke-ball/PokeBall.jsx';

import { getLastPath, capitalizeFirstLetter, getPokiImage } from '../../utilities/stringUtils';


import './SinglePokemon.scss';

const Spec = ({ att, value }) => {
  let valueContent;
  if (Array.isArray(value)) {
    valueContent = (
      <ul className='pokiValueList'>
        {value.map(v => <li> {capitalizeFirstLetter(v)} </li>)}
      </ul>
    );
  } else {
    valueContent = <span className='pokiValue'> {capitalizeFirstLetter(value)} </span>;
  }
  return (
    <p key={att} className='pokiAtt' >
      <span> {capitalizeFirstLetter(att)} </span> : {valueContent}
    </p>
  );
};

class SinglePokemon extends Component {

  componentDidMount() {
    const { pokemonSpec, fetchSinglePokemon, location } = this.props;
    if (!pokemonSpec.id) {
      const { pathname } = location;
      const pokemonName = getLastPath(pathname);
      fetchSinglePokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    }
  }


  render() {
    const { pokemonSpec, dispatchedPush } = this.props;
    if (!pokemonSpec.id) return <PokeBall />;
    const { id } = pokemonSpec;
    const pokemonImage = getPokiImage(id);
    const { name } = pokemonSpec;
    return (
      <div
        className={'singlePokeCardContainer'}
      >
        <div className={'singlePokeCard'}>
          <div
            onKeyDown={() => dispatchedPush('/')}
            onClick={() => dispatchedPush('/')}
            className='turnBack'
            role='link'
            tabIndex={'0'}
          >
            x
          </div>
          <div>
            <img
              className={'pokemonImage'}
              alt={name}
              align={'center'}
              src={pokemonImage}
            />
          </div>
          <p className='pokiName' > { capitalizeFirstLetter(name) } </p>
          <div className='pokiAttContainer' >
            {
              Object.keys(pokemonSpec).map(key => <Spec key={key} att={key} value={pokemonSpec[key]} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { pokemonSpec, status } = getSinglePokemon(state);
  return {
    pokemonSpec,
    status,
  };
};

const mapDispatchToProps = {
  fetchSinglePokemon: createFetchSinglePokemon,
  dispatchedPush: push
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemon);
