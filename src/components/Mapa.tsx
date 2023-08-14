import { useState, useRef, useEffect } from 'react'
import { UbicacionFutolinDTO } from '../models/UbicacionFutolinDTO';
import { CustomMarker } from './CustomMarker';
import MapView, { Camera } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { setFutbolinSeleccionado } from '../redux/slices/futbolinesSlice';

const Mapa = () => {
  const mapRef = useRef()
  const dispatch = useDispatch();

  const futbolinesSlice = useSelector(state => state.futbolines)

  const { futbolines, futbolinSeleccionado } = futbolinesSlice


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


  useEffect(() => {
    console.log('USEEFFECT ', futbolines?.futbolinSeleccionado);

  }, [futbolines?.futbolinSeleccionado])


  const [posicionMapa, setPosicionMapa] = useState({
    latitude: 40.971279,
    longitude: -5.663896,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  })

  const handleClickEnMarcador = (futbolin: UbicacionFutolinDTO) => {
    console.log('DISPATCHEANDO', futbolin);

    dispatch(setFutbolinSeleccionado(futbolin))
    // setFutbolinSeleccionado(futbolin)
  }


  return (
    <>
      <MapView
        ref={mapRef}
        region={posicionMapa}
        initialRegion={{
          latitude: 40.972279,
          longitude: -5.663896,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '95%' }}
        moveOnMarkerPress={false}
        showsPointsOfInterest={false}
        customMapStyle={mapStyle}
        showsCompass={false}
        onRegionChangeComplete={(a) => { console.log(a); }}
      >
        {
          futbolines !== undefined &&
          futbolines?.map((futbolin, index) => {
            return (
              <CustomMarker
                key={index}
                futbolin={futbolin}
                onpress={(futbolin) => { handleClickEnMarcador(futbolin) }}
                selected={futbolinSeleccionado?.id === futbolin.id}
              />
            )
          })}
      </MapView>
    </>
  );
}

export { Mapa }