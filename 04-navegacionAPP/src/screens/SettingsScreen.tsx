import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets(); // me pone el contenido debajo del notch en ios

  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
      }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favouriteIcon && (
        <Icon
          name={authState.favouriteIcon}
          size={150}
          color={colores.primary}
        />
      )}
    </View>
  );
};
