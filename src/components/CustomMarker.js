


import React from "react";
import {
    Text, View
} from "react-native";
import { Marker } from "react-native-maps";
import { futbolines } from "../data/Futbolin";

const CustomMarker = ({futbolin, onpress, selected}) => {
  console.log(futbolin.id);
    return (
        <Marker
                key={futbolin.id}
                onPress={() => { onpress(futbolines.find(f => f.id === futbolin.id)) }}
                coordinate={
                  {
                    latitude: futbolin.latitud,
                    longitude: futbolin.longitud
                  }
                }
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
              >

                <View className={`w-6 h-6 rounded-full bg-green-500 ${selected ? 'bg-green-500' : 'bg-green-300'}`}>
                  {/* <Text>{futbolin.tipoDeFutbolin.nombre || 'Sin nombre'}</Text> */}
                </View>

              </Marker>
    );
};
export { CustomMarker };

