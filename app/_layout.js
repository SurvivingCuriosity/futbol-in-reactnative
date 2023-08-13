import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { Provider} from "react-redux";
import store from "../redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaView className={'h-full'}>
          <Slot />
          <StatusBar style="light" />
      </SafeAreaView>
    </Provider>
  );
}
