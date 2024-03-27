import { StyleSheet, View, Text, Platform } from 'react-native'
import React from 'react'
import { map, capitalize } from 'lodash'
import getColorByPokemonType from '../../utils/getColorByPokemonType'


export default function Type(props) {
  const { types } = props
  return (
    <View style={styles.content}>
      {map(types, (item, key) => (
        <View key={key} style={{ ...styles.pill, backgroundColor: getColorByPokemonType(item.type.name) }}>
          <Text style={styles.type}>
            {capitalize(item.type.name)}
          </Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: Platform.OS === 'android' ? 60 : 20,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  }
})