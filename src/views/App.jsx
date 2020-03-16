import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

const HomePage = lazy(() => import('./home-page/HomePage'));
const SinglePokemon = lazy(() => import('./single-pokemon/SinglePokemon'));
const PokeBall = lazy(() => import('./poke-ball/PokeBall'));


const routes = (
  <Suspense fallback={<div> Loading </div> }>
    <Switch>
      <Route exact path={'/'} component={HomePage} />
      <Route path={'/:pokemonName'} component={SinglePokemon} />
      <Route component={PokeBall} />
    </Switch>
  </Suspense>
);
export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        {routes}
      </ConnectedRouter>
    );
  }
}


App.propTypes = {
  history: PropTypes.object
};

