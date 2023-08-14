import { View, Text, Image } from 'react-native';
import { UbicacionFutolinDTO } from '../models/UbicacionFutolinDTO';
// import IconoVerificado from '../assets/icons/verificado.svg';

export interface TarjetaFutbolinProps {
    futbolin: UbicacionFutolinDTO
}


const TarjetaFutbolin = ({ futbolin }: TarjetaFutbolinProps) => {

    return (
        <View className={'m-4 p-2 w-11/12 bg-neutral-700 border-2 border-neutral-800 rounded-md shadow-lg shadow-black'}>

            <View className='flex flex-row justify-between'>
                
                <View>
                        {/* <IconoVerificado fill='#777'/> */}
                    <Text className='text-neutral-200 text-xl'>{futbolin?.tipoDeFutbolin.nombre}</Text>
                    
                </View>
                
                <View>

                </View>

                <View>

                    <View className='flex flex-row justify-between'>
                        
                        <View>
                            <Text className={`text-lg ${futbolin?.rating > 0 ? 'text-miverde-500' : 'text-neutral-500'}`}>★</Text>
                        </View>
                        <View>
                            <Text className={`text-lg ${futbolin?.rating > 1 ? 'text-miverde-500' : 'text-neutral-500'}`}>★</Text>
                        </View>
                        <View>
                            <Text className={`text-lg ${futbolin?.rating > 2 ? 'text-miverde-500' : 'text-neutral-500'}`}>★</Text>
                        </View>
                        <View>
                            <Text className={`text-lg ${futbolin?.rating > 3 ? 'text-miverde-500' : 'text-neutral-500'}`}>★</Text>
                        </View>
                        <View>
                            <Text className={`text-lg ${futbolin?.rating > 4 ? 'text-miverde-500' : 'text-neutral-500'}`}>★</Text>
                        </View>
                        <View />

                    </View>

                    <Image source={
                        (futbolin?.img === 'presas.png')
                            ? require('../assets/futbolines/presas.png')
                            : (futbolin?.img === 'presas2.png')
                                ? require('../assets/futbolines/presas2.png')
                                : (futbolin?.img === 'tsunami.png')
                                    ? require('../assets/futbolines/tsunami.png')
                                    : require('../assets/futbolines/tsunami.png')

                    } style={{ width: 70, height: 70, borderRadius: 10 }} />
                </View>
                
            </View>


            <View>
                {/* SIES / NOES */}
                <View className='flex flex-row w-full p-2'>
                    <View style={{ width: '10%' }} className='flex items-center justify-center bg-green-500 h-4'>
                        <Text className='text-neutral-200 text-xs'>9</Text>

                    </View>
                    <View style={{ width: '90%' }} className='flex items-center justify-center bg-red-500 h-4'>
                        <Text className='text-neutral-200 text-xs'>19</Text>

                    </View>
                </View>
            </View>

        </View>
    )
}


export { TarjetaFutbolin }