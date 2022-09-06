import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  //reemplaza el titulo de la pagina que viene por defecto
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras', // pone back despues de la flecha en ios
    });
  });
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
