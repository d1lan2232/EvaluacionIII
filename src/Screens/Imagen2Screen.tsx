import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Imagen2Screen = () => {
  return (
    <View>
        <Image
        source={{uri: 'https://depor.com/resizer/fb2jKqQ4PoUl4R7SxuFSOLhn5C0=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YVDKLIO6LVBB5BF2CN5DYPEYGA.jpg'
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