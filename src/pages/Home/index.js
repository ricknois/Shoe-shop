import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Shoes from '../../component/Shoes'

export default function index() {

  const navigation = useNavigation();

  return (
    <View styles={ styles.container }>
      <View style={ styles.header }>
        <Image
          source={require('../../assets/banner.png')}
          styles={ styles.image }
        />

        <View style={ styles.textContainer }>
          <Text style={ styles.text }>SNEAKERS</Text>
          <Text style={[ styles.text, { color: '#CECECF' } ]}>•</Text>
          <Text style={[ styles.text, { color: '#CECECF' } ]}>MEN</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons 
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

        <View style={ styles.line }/>

        <ScrollView>
          <Text style={ styles.text }>NEW RELEASES</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
            <Shoes 
              img={require('../../assets/2.png')}
              cost="300.90"
              onClick={ () => navigation.navigate('Detail') }
            >
              Touchable sneaker
            </Shoes>
            <Shoes img={require('../../assets/1.png')} cost="560.90">Sneaker 2</Shoes>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/3.png')} cost="600.90">Sneaker 3</Shoes>
            <Shoes img={require('../../assets/4.png')} cost="220.90">Sneaker 4</Shoes>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/5.png')} cost="888.90">Sneaker with big name aaaa</Shoes>
            <Shoes img={require('../../assets/6.png')} cost="199.90">Sneaker 6</Shoes>
          </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});
