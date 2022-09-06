import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('tab3screen effect');
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
};
