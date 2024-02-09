// Importa a classe Animal do arquivo Animal.ts
import { Animal } from "./Animal";

/**
 * Representa um habitat para animais.
 */
export class Habitat {
    // Declaração de variáveis privadas

    /**
     * Nome do habitat.
     */
    private nome: string;

    /**
     * Lista de animais no habitat.
     */
    private lista_de_animais: Array<Animal>;

    /**
     * Construtor da classe Habitat.
     * 
     * @param _nome Nome do habitat.
     * @param _lista_de_animais Lista de animais no habitat.
     */
    constructor(_nome: string, _lista_de_animais: Array<Animal>) {
        // Inicializa o nome e a lista de animais com os valores passados como parâmetro
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     * Define o nome do habitat.
     * 
     * @param nome Novo nome do habitat.
     */
    public setNome(nome: string): void {
        // Define o nome do habitat com o valor passado como parâmetro
        this.nome = nome;
    }

    /**
     * Retorna o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        // Retorna o nome do habitat
        return this.nome;
    }

    /**
     * Define a lista de animais no habitat.
     * 
     * @param lista_de_animais Nova lista de animais no habitat.
     */
    public setLista_de_Animais(lista_de_animais: Array<Animal>): void {
        // Define a lista de animais com o valor passado como parâmetro
        this.lista_de_animais = lista_de_animais;
    }

    /**
     * Retorna a lista de animais no habitat.
     * 
     * @returns A lista de animais no habitat.
     */
    public getLista_de_Animais(): Array<Animal> {
        // Retorna a lista de animais no habitat
        return this.lista_de_animais;
    }
}
