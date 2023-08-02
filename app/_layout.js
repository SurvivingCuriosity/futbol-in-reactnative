import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView className={'h-full'}>
        <Slot />
        <StatusBar style="light" />
    </SafeAreaView>
  );
}
