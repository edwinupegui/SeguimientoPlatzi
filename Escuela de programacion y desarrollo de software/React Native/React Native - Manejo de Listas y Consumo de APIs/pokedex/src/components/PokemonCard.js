import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { capitalize } from 'lodash'
import getColorByPokemonType from '../utils/getColorByPokemonType'


export default function PokemonCard(props) {
  const { pokemon } = props
  const navigation = useNavigation()
  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.principalType),
    ...styles.bgStyles
  }

  const goToPokemon = () => {
    navigation.navigate('PokemonScreen', { id: pokemon.id })
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10
  },
  name: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontWeight: "bold",
    fontSize: 11,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  }
})