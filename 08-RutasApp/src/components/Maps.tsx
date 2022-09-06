import React, {useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

interface Props {
  markers?: Marker[];
}

export const Maps = ({markers}: Props) => {
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      err => console.log({err}),
      {
        enableHighAccuracy: true,
      },
    );
  }, []);

  return (
    <>
      <MapView
        style={{flex: 1}}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Esto es un titulo"
          description="Esto es uan descripción del marcador"
        /> */}
      </MapView>
    </>
  );
};
