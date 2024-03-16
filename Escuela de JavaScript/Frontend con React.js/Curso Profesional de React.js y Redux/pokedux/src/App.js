import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg'
import { useSelector, useDispatch} from 'react-redux'
import './App.css';
import { useEffect } from 'react';
import { getPokemons } from './api'
import { setPokemons } from './actions';

function App() {
  
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonRes = await getPokemons()
      dispatch(setPokemons(pokemonRes))
    }
    fetchPokemons()
  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
