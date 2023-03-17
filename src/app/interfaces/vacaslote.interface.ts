import { lote } from "./lote.interface";
import { Peso } from "./peso.interface";
import { raza } from './raza.interface';

 export interface vacasLote {
    id: number;
    arete: string;
    fechaNac: string;
    lote: lote;
    raza: raza;
    pesos: Peso[]
 }