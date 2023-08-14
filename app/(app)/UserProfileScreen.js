import { Text, View } from "react-native";
import { useSelector } from "react-redux";
export default function User() {
  const user = useSelector((state) => state.user);

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
      </View>
    </View>
  );
}
