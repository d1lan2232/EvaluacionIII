import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BotonComponent } from '../Components/BotonComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Imagen1Screen } from './Imagen1Screen';

const navigation=useNavigation();

interface Props extends StackScreenProps<any, any>{};

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}> Bienvenido </Text>

        <View style={styles.container2}>
            <BotonComponent title='Imagen 1' onPress={()=>navigation.navigate('Imagen1Screen')}/>
            <BotonComponent title='Imagen 2' onPress={()=>navigation.navigate('Imagen2Screen')}/>
            <BotonComponent title='MayorIgual' onPress={()=>navigation.navigate('MayorIgual')}/>
            <BotonComponent title='MenorIgual' onPress={()=>navigation.navigate('MenorIgual')}/>
        </View>
    </View>
    
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    },
    container2:{
        backgroundColor: 'white',
        height: '95%',
        borderTopStartRadius: 45,
    },
    texto:{
        fontSize: 34,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 15,
        textAlign: 'center',
    },
})