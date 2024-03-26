import { SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  const loadPokemons = async () => {
    const response = await getPokemonsApi(nextUrl)
    setNextUrl(response.next)

    const promises = response.results.map(async (pokemon) => {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url)
      return {
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        principalType: pokemonDetails.types[0].type.name,
        secondaryType: pokemonDetails.types[1]?.type.name || '',
        order: pokemonDetails.order,
        image: pokemonDetails.sprites.other['official-artwork'].front_default,
      }
    })

    const newPokemons = await Promise.all(promises)
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons])
  }

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  )
}