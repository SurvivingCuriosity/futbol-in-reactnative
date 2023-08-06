import { TipoDeFutbolinDTO} from "../models"
import { UbicacionFutolinDTO } from "../models/UbicacionFutolinDTO"

import { tipo } from "./TiposDeFutbolin"



export const futbolines: UbicacionFutolinDTO[] = [
    {
        id:0,
        img: require('../assets/futbolines/tsunami.png'),
        latitud:40.96297,
        longitud:-5.66158,
        nombre:'',
        tipoDeFutbolin: tipo[0],
        confirmaciones:20,
        rating:1,
        reclamaciones:2,
        verificado:true,
        verificador:'a'
    },
    {
        id:1,
        img: require('../assets/futbolines/tsunami.png'),
        latitud:40.96409,
        longitud:-5.66158,
        nombre:'',
        tipoDeFutbolin: tipo[1],
        confirmaciones:5,
        rating:5,
        reclamaciones:0,
        verificado:false,
        verificador:'a'
    },
    {
        id:2,
        img: require('../assets/futbolines/presas.png'),
        latitud:40.967407,
        longitud:-5.667707,
        nombre:'',
        tipoDeFutbolin: tipo[2],
        confirmaciones:18,
        rating:1,
        reclamaciones:0,
        verificado:true,
        verificador:'a'
    },
    {
        id:3,
        img: require('../assets/futbolines/presas2.png'),
        latitud:40.976154,
        longitud:-5.653368,
        nombre:'',
        tipoDeFutbolin: tipo[1],
        confirmaciones:20,
        rating:3,
        reclamaciones:0,
        verificado:true,
        verificador:'a'
    },
]