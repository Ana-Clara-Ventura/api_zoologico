// Importa a classe Habitat do arquivo Habitat.ts
import { Habitat } from "./Habitat";

/**
 * Representa uma atração em um parque.
 */
export class Atracao {
    // Declaração de variáveis privadas

    /**
     * Nome da atração.
     */
    private nome: string;

    /**
     * Lista de habitats da atração.
     */
    private lista_de_habitats: Array<Habitat>;

    /**
     * Construtor da classe Atracao.
     * 
     * @param _nome Nome da atração.
     * @param _lista_de_habitats Lista de habitats da atração.
     */
    constructor(_nome: string, _lista_de_habitats: Array<Habitat>) {
        // Inicializa o nome e a lista de habitats com os valores passados como parâmetro
        this.nome = _nome;
        this.lista_de_habitats = _lista_de_habitats;
    }

    /**
     * Define o nome da atração.
     * 
     * Novo nome da atração.
     */
    public setNome(nome: string): void {
        // Define o nome da atração com o valor passado como parâmetro
        this.nome = nome;
    }

    /**
     * Retorna o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNome(): string {
        // Retorna o nome da atração
        return this.nome;
    }

    /**
     * Define a lista de habitats da atração.
     * 
     * Nova lista de habitats da atração.
     */
    public setLista_de_habitats(lista_de_habitats: Array<Habitat>): void {
        // Define a lista de habitats com o valor passado como parâmetro
        this.lista_de_habitats = lista_de_habitats;
    }

    /**
     * Retorna a lista de habitats da atração.
     * 
     * @returns A lista de habitats da atração.
     */
    public getLista_de_Animais(): Array<Habitat> {
        // Retorna a lista de habitats da atração
        return this.lista_de_habitats;
    }
}
