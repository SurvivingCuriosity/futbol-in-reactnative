import { Text, View, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useSelector, useDispatch } from "react-redux";


export default function home() {

  const dispatch = useDispatch()
  // const state = useSelector(state => state)



  return (
    <View className={"justify-center items-center"}>
      
      <Text className={"text-black mr-auto p-1"}>Según tus favoritos</Text>
      
      <ScrollView
        hitSlop={100}
        horizontal= {true}
        snapToInterval={160} //your element width
        decelerationRate={'fast'}
        
      >
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Un elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Otro elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Ter elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Cua elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Un elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Otro elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Ter elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Cua elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Un elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Otro elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Ter elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-40 h-20 text-white rounded-lg'}>Cua elemento</Text>
        </View>
      </ScrollView>
      <Text className={"text-black mr-auto p-1"}>Según tus favoritos</Text>
      
      <ScrollView
        hitSlop={100}
        horizontal= {true}
        snapToInterval={320} //your element width
        decelerationRate={'fast'}
      >
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-32 text-white rounded-lg'}>Un elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-32 text-white rounded-lg'}>Otro elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-32 text-white rounded-lg'}>Ter elemento</Text>
        </View>
        <View>
          <Text className={'bg-[#333] m-1 p-4 w-80 h-32 text-white rounded-lg'}>Cua elemento</Text>
        </View>
      </ScrollView>

      <Text className="text-black">Hola</Text>
      <Link href="/login" asChild>
        <Pressable className={"px-4 py-2 bg-neutral-600 rounded-md m-2"}>
          <Text className={"text-white text-xl"}>Login</Text>
        </Pressable>
      </Link>
      <Link href="/register" asChild>
        <Pressable className={"px-4 py-2 bg-neutral-600 rounded-md m-2"}>
          <Text className={"text-white text-xl"}>Register</Text>
        </Pressable>
      </Link>

    </View>
  );
}
