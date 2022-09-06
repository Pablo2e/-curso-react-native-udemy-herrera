import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreen = () => {
  const {
    authState: {isLoggedIn},
    logOut,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>

      {isLoggedIn && (
        <Button title="Log Out" onPress={logOut}>
          <Text>Log Out</Text>
        </Button>
      )}
    </View>
  );
};
