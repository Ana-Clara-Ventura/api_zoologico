export class Animal {

    private nome: string;
    private idade: number;
    private genero: string;

    constructor(_nome:string, _idade: number, _genero: string){
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero 
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getGenero(): string {
        return this.genero;
    }
}