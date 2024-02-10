import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Imagen1Screen = () => {
  return (
    <View>
        <Image
        source={{uri: 'https://elcomercio.pe/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg'
        }} style={styles.avatar}/>
    </View>
  )
}


const styles=StyleSheet.create({
  avatar:{
      width: '90%',
      height: '60%',
      alignSelf: 'center',
      top: '50%'
  }
})