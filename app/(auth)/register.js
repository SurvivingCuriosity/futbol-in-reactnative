import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  Image,
  Pressable
} from "react-native";
import { Link } from "expo-router";

export default function Register() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#333",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingLeft: 8,
      }}
    >
      <View className="w-full h-full p-5 flex flex-col justify-start">
        <Text className={"text-miverde-500 text-5xl font-extrabold my-8"}>
          Bienvenido!
        </Text>


      <View className="mb-4">
          <Text className="mb-1 text-miverde-300 text-lg">Usuario o email </Text>
          <TextInput
            placeholder="@"
            className="h-10 p-2 bg-white rounded-md text-lg"
          />
      </View>

      <View className="mb-4">
          <Text className="mb-1 text-miverde-300 text-lg">Usuario o email </Text>
          <TextInput
            placeholder="@"
            className="h-10 p-2 bg-white rounded-md text-lg"
          />
      </View>

      <View className="mb-4">
          <Text className="mb-1 text-miverde-300 text-lg">Contraseña </Text>
          <TextInput
            placeholder="•"
            className="h-10 p-2 bg-white rounded-md text-lg"
            passwordRules="a"
            showSoftInputOnFocus
          />
      </View>
      <View className="mb-4">
          <Text className="mb-1 text-miverde-300 text-lg">Confirmar contraseña </Text>
          <TextInput
            placeholder="•"
            className="h-10 p-2 bg-white rounded-md text-lg"
            passwordRules="a"
            showSoftInputOnFocus
          />
      </View>

      <Text className="text-miverde-100 text-md ml-auto">¿Ya tienes una cuenta? Inicia sesión {
        <Link href="/login" asChild>
          <Text className={"underline"}>aquí</Text>
      </Link>
      }</Text>

      
      <Link href="/login" asChild>
        <Pressable className={"px-4 py-2 w-[200px] mx-auto bg-miverde-400 rounded-md mt-10 z-10"}>
          <Text className={"text-neutral-800 text-center text-2xl"}>Registrarme</Text>
        </Pressable>
      </Link>

      <Image 
        className="absolute bottom-0 -left-2 w-screen h-[300px]"
        source={require('../../src/assets/img/fondoLogin.png')}/>
      </View>
    </SafeAreaView>
  );
}
