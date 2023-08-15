import { Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../src/redux/slices/authSlice";
import { useRouter } from "expo-router";
export default function User() {
  const user = useSelector((state) => state.user);
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch({type:'auth/logout'})
    router.replace('/login')
  }

  return (
    <View className={"m-2"}>
      
      <View className="bg-neutral-700 p-1 rounded-md mb-2">
        <Text className="text-neutral-200">Datos personales</Text>
        <View className="p-2">

          <View className="mb-3">
            <Text className="text-neutral-400 text-md">Nombre de usuario</Text>
            <Text className="text-miverde-400 text-lg">@{user.username}</Text>
          </View>

          <View className="mb-3">
            <Text className="text-neutral-400 text-md">Nombre completo</Text>
            <Text className="text-neutral-200 text-lg">
              {user.nombreCompleto}
            </Text>
          </View>

          <View className="mb-3">
            <Text className="text-neutral-400 text-md">Ciudad</Text>
            <Text className="text-miverde-400 text-lg">{user.ciudad}</Text>
          </View>

          <View className="mb-3">
            <Text className="text-neutral-400 text-md">Sobre mi </Text>
            <Text className="text-miverde-100 text-md">Lorem ipsum yo estaba tranquilo hasta que de repente vino alguien llamado Lorem a decirme qué pasa ipsum y la verdad es que me dejó todo colocado. No sé por donde podría seguir</Text>
          </View>
        </View>
      </View>

      <View className="bg-neutral-700 p-1 rounded-md">
        <Text className="text-neutral-200">Social</Text>
        <View className="p-2">

          <View className="mb-3 flex-row items-baseline gap-1">
            <Text className="text-neutral-400 text-lg">Nivel:</Text>
            <Text className="text-miverde-400 text-lg">3</Text>
          </View>
        </View>

        <Pressable onPress={()=>{handleClickLogout()}} className={"px-4 py-2 bg-neutral-600 rounded-md m-2"}>
          <Text className={"text-white text-xl"}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
