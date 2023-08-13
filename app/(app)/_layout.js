import { Slot } from "expo-router";
import { FixedBottomNav } from "../../src/components";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <SafeAreaView className={"flex-1 bg-[#5ced81]"}>
        <Slot />
      <FixedBottomNav />
    </SafeAreaView>
  );
}
