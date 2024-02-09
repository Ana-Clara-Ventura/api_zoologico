import {Atracao} from "./Atracao";

export class Zoologico {
    private nome: string;
    private lista_de_atracoes: Array<Atracao>;

    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>){
        this.nome = _nome;
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    /**
     *  Retorna o nome do Zoológico.
     * 
     * @returns o nome do Zoológico. 
     */

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setLista_de_atracoes(lista_de_atracoes: Array<Atracao>):void{
        this.lista_de_atracoes = lista_de_atracoes;
    }
    public getLista_de_atracoes():Array<Atracao>{
        return this.lista_de_atracoes;
    }

}