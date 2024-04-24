// Importa a classe Atracao do arquivo Atracao.ts
import { Atracao } from "./Atracao";

/**
 * Representa um zoológico que contém atrações.
 */
export class Zoologico {
    // Declaração de variáveis privadas

    /**
     * Nome do zoológico.
     */
    private nome: string;

    /**
     * Lista de atrações no zoológico.
     */
    private lista_de_atracoes: Array<Atracao>;

    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome Nome do zoológico.
     * @param _lista_de_atracoes Lista de atrações no zoológico.
     */
    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        // Inicializa o nome e a lista de atrações com os valores passados como parâmetro
        this.nome = _nome;
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param nome Novo nome do zoológico.
     */
    public setNome(nome: string): void {
        // Define o nome do zoológico com o valor passado como parâmetro
        this.nome = nome;
    }

    /**
     * Retorna o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        // Retorna o nome do zoológico
        return this.nome;
    }

    /**
     * Define a lista de atrações no zoológico.
     * 
     * @param lista_de_atracoes Nova lista de atrações no zoológico.
     */
    public setLista_de_atracoes(lista_de_atracoes: Array<Atracao>): void {
        // Define a lista de atrações com o valor passado como parâmetro
        this.lista_de_atracoes = lista_de_atracoes;
    }

    /**
     * Retorna a lista de atrações no zoológico.
     * 
     * @returns A lista de atrações no zoológico.
     */
    public getLista_de_atracoes(): Array<Atracao> {
        // Retorna a lista de atrações no zoológico
        return this.lista_de_atracoes;
    }
}
