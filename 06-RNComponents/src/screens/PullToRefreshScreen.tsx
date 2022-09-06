import React, {useContext} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  //const {top} = useSafeAreaInsets();

  const [refreshing, setRefreshing] = React.useState(false);

  const [data, setData] = React.useState<string>();

  const {
    theme: {colors, dividerColor, dark},
  } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 1500);
  };

  return (
    <ScrollView
      style={
        {
          // marginTop: refreshing ? top : 0, // solo ios para demar un margin top
        }
      }
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={100} //solo android, margin top del spinner al soltar
          progressBackgroundColor={dividerColor}
          colors={[colors.text]}
          //colors={['white', 'red', 'orange']} va cambiando entre esos colores
          // solo ios
          style={{backgroundColor: '#5856D6'}}
          tintColor={dark ? 'white' : 'black'}
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
