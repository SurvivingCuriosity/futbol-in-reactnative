import { TipoDeFutbolinDTO } from "./TipoDeFutbolinDTO"
import { ImageSourcePropType } from "react-native"

export interface UbicacionFutolinDTO {
    id: number,
    nombre: string,
    img: string | undefined,
    latitud: number,
    longitud: number,
    tipoDeFutbolin: TipoDeFutbolinDTO,
    rating: 1 | 2 | 3 | 4 | 5
    confirmaciones: number,
    reclamaciones: number,
    verificado: boolean,
    verificador: string
}