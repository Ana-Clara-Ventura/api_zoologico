import {Habitat} from "./Habitat";

export class Atracao {
    private nome: string;
    private lista_de_habitats: Array<Habitat>;

    constructor(_nome: string, _lista_de_habitats: Array<Habitat>){
        this.nome = _nome;
        this.lista_de_habitats = _lista_de_habitats;
    }

    /**
     *  Retorna o nome da Atração.
     * 
     * @returns o nome da Atração. 
     */

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setLista_de_habitats(lista_de_habitats: Array<Habitat>):void{
        this.lista_de_habitats = lista_de_habitats;
    }
    public getLista_de_Animais():Array<Habitat>{
        return this.lista_de_habitats;
    }

}