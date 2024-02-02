import {Animal} from "./Animal";

export class Reptil extends Animal{
    private tipo_de_escamas: string;

    constructor( _nome:string, _idade: number, _genero: string, _tipo_de_escamas: string){
        super(_nome, _idade, _genero);
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    public setTipo_de_escamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }

    public getTipo_de_escamas(): string {
        return this.tipo_de_escamas;
    }
}