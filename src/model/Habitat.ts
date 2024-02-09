import {Animal} from "./Animal";

export class Habitat {
    private nome: string;
    private lista_de_animais: Array<Animal>;

    constructor(_nome: string, _lista_de_animais: Array<Animal>){
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     *  Retorna o nome do habitat.
     * 
     * @returns o nome do habitat. 
     */

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setLista_de_Animais(lista_de_animais: Array<Animal>):void{
        this.lista_de_animais = lista_de_animais;
    }
    public getLista_de_Animais():Array<Animal>{
        return this.lista_de_animais
    }

}