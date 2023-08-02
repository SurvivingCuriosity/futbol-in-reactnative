


import React from "react";
import {
    Text,
} from "react-native";
import { Marker } from "react-native-maps";


const CustomMarker = (props) => {

    const {onPress, coordinate, centerOffset, anchor, miProp} = props

    return (
        <Marker
            onPress={onPress}
            coordinate={coordinate}
            centerOffset={centerOffset}
            anchor={anchor}
        >
            <Text className="p-2 bg-neutral-200 rounded-full">{miProp}</Text>
        </Marker>
    );
};
export { CustomMarker };

