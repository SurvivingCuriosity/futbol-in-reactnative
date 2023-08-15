import { useRootNavigation } from "expo-router";
import { useRouter, useSegments } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const Index = () => {
  const segments = useSegments();
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedin);
  const navigationState = useRootNavigation();

  useEffect(() => {
    console.log('loggedin: ',loggedIn);
    // if (!navigationState.key) return;

    const inAuthGroup = segments[0] === '(auth)'
    console.log('inauth: ',inAuthGroup);
    if(!loggedIn && !inAuthGroup){
        console.log('NO LOGGED IN');
        router.replace('/login')
    } else if(loggedIn){
        console.log('LOGED IN ');
        router.replace('/HomeScreen')
    }
  }, [loggedIn, segments, navigationState?.key]);

  useEffect(() => {
    console.log('loggedin CAMBIA: ',loggedIn);

  }, [loggedIn]);


  return <View>{!navigationState?.key ? <Text>LOADING...</Text> : <></>}</View>;
};
export default Index;