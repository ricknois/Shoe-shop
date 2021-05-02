import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';

export default function index({ navigation }) {

  return (
    <ScrollView style={ styles.container }>
      <Image 
        source={ require('../../assets/detail.png') }
        style={ styles.image }
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={[ styles.title, { fontSize: 24 } ]}>$ 300.90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[ styles.title, { fontSize: 30 } ]}>Shoe touchable</Text>
        </View>

        <View style={ styles.dotContainer }>

          <Dot color="#2379f4"/>
          <Dot color="#fb6e53"/>
          <Dot color="#ddd"/>
          <Dot color="#000"/>
        </View>

      </View>

      <View style={{ flexDirection: 'column', width: '100%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton bgcolor="#17181a" color="#FFF">40</SizeButton>
          <SizeButton>41</SizeButton>
          <SizeButton>43</SizeButton>
          <SizeButton>44</SizeButton>
        </ScrollView>

        <View styles={styles.textContent}>
          <Text style={styles.textTitle}>
            Shoe touchable
          </Text>
          <Text style={ styles.textList }>
            ShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoeShoe
          </Text>
          <Text style={ styles.textList }>
            - Category: Shoe
          </Text>
          <Text style={ styles.textList }>
            - Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />


      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginHorizontal: '2%',
    paddingHorizontal: '2%',
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  },
});
