import { StatusBar } from "expo-status-bar";
import { Text, View, } from "react-native";

export default function Login() {
  return (
    <View className={'bg-slate-200 flex-1 justify-center items-center'}>
        <Text className={'text-red-500'}>Login</Text>
        <StatusBar style="auto" />
    </View>
  );
}