import React from 'react';
import {Tabs} from '../navigator/Tabs';
import {SettingsScreen} from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= height ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://images.assetsdelivery.com/compings_v2/nexusby/nexusby1810/nexusby181000286.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* opciones de menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
          flexDirection:'row'
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Text>
            <Icon name="compass-outline" size={25} color="gray" />
          </Text>
          <Text style={styles.menuTexto}> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.menuBoton,
          flexDirection:'row'
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
            <Text>
            <Icon name="settings-outline" size={25} color="gray" />
          </Text>
          <Text style={styles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
