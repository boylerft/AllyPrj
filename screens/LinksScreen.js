import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class LinksScreen extends React.Component {
  render() {
    return (
        <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
            }}
        >
        </MapView>
    );
  }
};

const styles = StyleSheet.create({
 container: {
   position: 'absolute',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
  map: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
  }

});
