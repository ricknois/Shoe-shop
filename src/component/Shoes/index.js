import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function index(props) {

  function filterDesc(desc) {
    if (desc.length < 22) {
      return desc;
    }
    return `${desc.substring(0, 20)}...`
  }

  return (
    <TouchableOpacity style={ StyleSheet.container } onPress={ props.onClick }>
      <Image
        style={ StyleSheet.shoesImg }
        source={ props.img }
      />
      <Text style={ StyleSheet.shoesText }>
        {filterDesc(props.children)}
      </Text>
      <Text style={[ StyleSheet.shoesText, { opacity: 0.4 } ]}>
        {props.cost}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16,
  }
})
