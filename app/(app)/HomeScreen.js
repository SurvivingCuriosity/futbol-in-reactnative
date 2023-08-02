import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, ScrollView } from "react-native";
import { ImageViewer, Button } from "../../components";
import { Link } from "expo-router";


export default function home() {
  return (
    <View className={"justify-center items-center"}>
      
      <Text className={"text-white mr-auto p-1"}>Según tus favoritos</Text>
      
      <ScrollView
        hitSlop={30}
        horizontal= {true}
        snapToInterval={320} //your element width
        decelerationRate={'fast'}
      >
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-20 text-white rounded-lg'}>Un elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-20 text-white rounded-lg'}>Otro elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-20 text-white rounded-lg'}>Ter elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-20 text-white rounded-lg'}>Cua elemento</Text>
        </View>
      </ScrollView>

      <View className='flex-1 justify-between'>

      <Link href="/login" asChild>
        <Pressable className={"px-4 py-2 bg-neutral-600 rounded-md m-2"}>
          <Text className={"text-white text-xl text-center"}>Login</Text>
        </Pressable>
      </Link>

      <Link href="/cosas" asChild>
        <Pressable className={"px-4 py-2 bg-neutral-600 rounded-md m-2"}>
          <Text className={"text-white text-xl text-center"}>Cosas</Text>
        </Pressable>
      </Link>
      </View>
    </View>
  );
}
