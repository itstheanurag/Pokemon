import React, { useEffect, useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList';
import PokemonInfo from './components/PokemonInfo';
import { CssBaseline } from '@material-ui/core';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json')
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }


  return (
    <div className='pageContainer'>
      <CssBaseline />
      <div className='App'>
        <h2>Pokemon Search</h2>
        <input
          type='text'
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <div className='twoColumnLayout'>
          <table width="100%">
            <tbody>
              {
                pokemon
                  .filter(({ name: { english } }) =>
                    english?.toLowerCase().includes(filter.toLowerCase())
                  )
                  .slice(0, 20)
                  .map((pokemon) => (
                    <PokemonList
                      key={pokemon.id}
                      pokemon={pokemon}
                      onClick={(pokemon) => setSelectedPokemon(pokemon)}
                    />
                  )
                  )}
            </tbody>
          </table>
          {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
        </div>

      </div>
    </div>
  );
}

export default App;