import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';

import PokeBall from '../poke-ball/PokeBall.jsx';
import PokemonCard from './components/PokemonCard.jsx';

import { getPokemonList } from '../../store/PokemonList/reducer';
import { createFetchPokemons } from '../../store/PokemonList/actions';
import { createFetchSinglePokemon } from '../../store/SinglePokemon/actions';


import './HomePage.scss';


class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: '',
    };
  }
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    const { pokemons, dispatchedPush, fetchSinglePokemon } = this.props;
    const { filterValue } = this.state;
    if (!pokemons.length) return <PokeBall />;
    return (
      <>
        <input
          className='filterInput'
          type='text'
          placeholder={`Search a Pokemon - (Generation 1 - ${pokemons.length} pokemon)`}
          value={this.state.filterValue}
          onChange={(e) => this.setState({ filterValue: e.target.value })}
        />
        <div
          className={'pokemonCardsContainer'}
        >
          {
            pokemons.map(
              (poki, i) => {
                const isFiltered = (poki.name.indexOf(filterValue) === -1);
                return (
                  <PokemonCard
                    key={i}
                    index={i}
                    name={poki.name}
                    isFiltered={isFiltered}
                    url={poki.url}
                    dispatchedPush={dispatchedPush}
                    fetchSinglePokemon={fetchSinglePokemon}
                  />
                );
              }
            )
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const pokemonList = getPokemonList(state);
  const { pokemons, status } = pokemonList;
  return {
    pokemons,
    status,
  };
};

const mapDispatchToProps = {
  fetchPokemons: createFetchPokemons,
  fetchSinglePokemon: createFetchSinglePokemon,
  dispatchedPush: push
};

HomePage.propTypes = {
  pokemons: PropTypes.array,
  status: PropTypes.object,
  fetchPokemons: PropTypes.func,
  dispatchedPush: PropTypes.func,
  fetchSinglePokemon: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
