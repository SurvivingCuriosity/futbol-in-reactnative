import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

import { usePathname } from "expo-router";

import UserIcon from "../assets/icons/user.svg";
import ListIcon from "../assets/icons/list.svg";
import WorldIcon from "../assets/icons/world.svg";
import HomeIcon from "../assets/icons/home.svg";
import AddIcon from "../assets/icons/add.svg";

const FixedBottomNav = () => {
  const pathname = usePathname();
  const links = [
    {
      label: "Inicio",
      path: "/HomeScreen",
      icon: <HomeIcon fill={pathname === "/HomeScreen" ? "#5CED81" : "#FFF"} />,
    },
    {
      label: "Mapa",
      path: "/MapScreen",
      icon: <WorldIcon fill={pathname === "/MapScreen" ? "#5CED81" : "#FFF"} />,
    },
    {
      label: "Agregar",
      path: "/AddScreen",
      icon: <AddIcon fill={pathname === "/AddScreen" ? "#5CED81" : "#FFF"} />,
    },
    {
      label: "Lista",
      path: "/ListScreen",
      icon: <ListIcon fill={pathname === "/ListScreen" ? "#5CED81" : "#FFF"} />,
    },
    {
      label: "Perfil",
      path: "/UserProfileScreen",
      icon: <UserIcon fill={pathname === "/UserProfileScreen" ? "#5CED81" : "#FFF"} />,
    },
  ];
  return (
    <View
      className={"bg-neutral-700 flex flex-row items-center justify-around h-20 absolute bottom-0 w-full"}
    >
      {links.map((l) => {
        return (
          <View key={l.path} className={'w-12'}>
            <Link href={l.path} asChild>
              <TouchableOpacity>
                <View className={"flex flex-col items-center"}>
                  {l.icon}
                  {pathname === l.path && (
                    <Text className={"text-miverde-400"}>{l.label}</Text>
                  )}
                </View>
              </TouchableOpacity>
            </Link>
          </View>
        );
      })}
    </View>
  );
};
export { FixedBottomNav };

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    borderRadius: 18,
  },
});
