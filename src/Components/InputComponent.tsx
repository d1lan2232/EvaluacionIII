import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { BotonComponent } from './BotonComponent';

export const InputComponent = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [comparisonResult, setComparisonResult] = useState('');

    const compararNumeros = () => {
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      if (isNaN(numero1) || isNaN(numero2)) {
        setComparisonResult('Por favor, ingresa números válidos.');
      } else if (num1 < num2) {
        setComparisonResult(`${num1} es menor que ${num2}.`);
      } else if (num1 > num2) {
        setComparisonResult(`${num2} es menor que ${num1}.`);
      } else if (num1 == num2){
        setComparisonResult(`${num1} es igual a ${num2}.`);
      } 
    };

    return (
      <View>
        <Text style={styles.texto}>A continuacion escribe 2 números para evaluar cual de los mismos 
          es mayor e incluso saber si son iguales</Text>
        <TextInput
          style= {styles.inputCuadro}
          placeholder="Ingrese su primer número"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style= {styles.inputCuadro2}
          placeholder="Ingrese el segundo número"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />
        <View style={styles.boton}>
         <BotonComponent title='Calcular' onPress={compararNumeros}/>
        </View>
        <Text style={styles.textoR}>{comparisonResult}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    texto:{
      padding: 25,
      fontWeight: 'bold',

    },
    inputCuadro:{
      width: '80%',
      borderWidth: 1,
      padding: 15,
      alignSelf: 'center',
      top: 80,
      borderRadius: 30,
      backgroundColor: 'white',
      elevation: 16, 
  },
    inputCuadro2:{
      width: '80%',
      borderWidth: 1,
      padding: 15,
      alignSelf: 'center',
      top: 100,
      borderRadius: 30,
      backgroundColor: 'white',
      elevation: 16, 
  },
    boton:{
      top: 120
    },
    textoR:{
      top: 210,
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'center'
    }
})

