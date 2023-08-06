import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

import { View, Text } from "react-native";
import { CustomMarker, TarjetaFutbolin } from "../../components";
import { futbolines } from "../../data/Futbolin";
import { UbicacionFutolinDTO } from "../../models/UbicacionFutolinDTO";

export default function MapScreen() {
  const mapRef = React.useRef()

  const [futbolinSeleccionado, setFutbolinSeleccionado] = useState<UbicacionFutolinDTO | null>(futbolines[0])

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#5CED81",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#7ef79d",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d9ffe2",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7ef79d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#7ef79d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ];

  const markers = [
    {
      id: 1,
      coordinate: {
        latitude: 40.96297,
        longitude: -5.66158
      },
    },
    {
      id: 2,
      coordinate: {
        latitude: 40.96409,
        longitude: -5.66158
      },
    },
    {
      id: 3,
      coordinate: {
        latitude: 40.967407,
        longitude: -5.667707
      },
      nombre: 'Bar NIX'
    },
    {
      id: 4,
      coordinate: {
        latitude: 40.976154,
        longitude: -5.653368
      },
    },
  ]
  return (
    <View className={"flex-1 p-2"}>
      <Text className={'text-r'}>
        El mapaasdf
      </Text>
      <View className={"w-full h-full flex items-center"}>

        <MapView
          ref={mapRef}
          region={{
            latitude: 40.971279,
            longitude: -5.663896,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          initialRegion={{
            latitude: 40.972279,
            longitude: -5.663896,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          style={{ width: 340, height: 500 }}
          loadingEnabled={true}
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#222"
          moveOnMarkerPress={false}
          showsPointsOfInterest={false}
          customMapStyle={mapStyle}
        >

          {futbolines.map(futbolin => {
            return (
              <CustomMarker
                futbolin={futbolin}
              />

            )
          })}

          {/* {markers.map(marker => {
            return (
              <Marker
                key={marker.id}
                onPress={() => { console.log('pressed'); }}
                coordinate={marker.coordinate}
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
              >

                <View className="p-2 rounded-full bg-green-500">
                  <Text>{marker.nombre || 'Sin nombre'}</Text>
                </View>

              </Marker>
            )
          })} */}

        </MapView>


        <TarjetaFutbolin
          futbolin={futbolinSeleccionado}
        />
      </View>
    </View>
  );
}
