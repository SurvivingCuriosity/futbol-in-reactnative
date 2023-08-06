


import React from "react";
import {
    Text, View
} from "react-native";
import { Marker } from "react-native-maps";


const CustomMarker = ({futbolin}) => {

    return (
        <Marker
                key={futbolin.id}
                onPress={() => { setFutbolinSeleccionado(futbolines.find(f => f.id === futbolin.id)) }}
                coordinate={
                  {
                    latitude: futbolin.latitud,
                    longitude: futbolin.longitud
                  }
                }
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
              >

                <View className="p-2 rounded-full bg-green-500">
                  <Text>{futbolin.tipoDeFutbolin.nombre || 'Sin nombre'}</Text>
                </View>

              </Marker>
    );
};
export { CustomMarker };

