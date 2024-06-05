import { Ave } from "../model/Ave"
import { Request, Response } from "express";

export class AveController extends Ave {
    public async novo(req: Request, res: Response) {
        try {
            // Desestruturando objeto recebido pelo front-end
            const { nome, idade, genero, envergadura, idHabitat } = req.body;

            // Instanciando objeto Ave
            const novaAve = new Ave(nome, idade, genero, envergadura);

            // Chama o método para persistir a ave no banco de dados
            const result = await Ave.cadastrarAve(novaAve, idHabitat);

            // Verifica se a query foi executada com sucesso
            if (result) {
                return res.status(200).json('Ave cadastrado com sucesso');
            } else {
                return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');
            }
        }
        catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');
            
        }}

    public async buscar(req: Request, res: Response) {
        try {
                // cria objeto aves e atribui a ele o retorno do método listarAves
    const aves = await Ave.listarAves();

    // retorna a lista de aves em formato json
    res.status(200).json(aves);
            
        }  catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');
            
        }}
    public async deletar(req: Request, res: Response) { 
        try{
            // recuperando o id do animal a ser removido
    const idAnimal = parseInt(req.query.idAnimal as string);
    
    // chama a função para remover o animal e armazena o resultado na variável
    const resultado = await Ave.removerAve(idAnimal);
    
    if(resultado) {
        // se o resultado for **true**, retorna mensagem de sucesso
        return res.status(200).json('Animal foi removido com sucesso');
    } else {
        // se o resultado for **false**, retorna mensagem de erro
        return res.status(401).json('Erro ao remover animal');
    }
        }
        catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');
            
        }
    }
public async atualizar(req: Request, res: Response) {
    // Desestruturando objeto recebido pelo front-end
    const { nome, idade, genero, envergadura } = req.body;
    // recuperando o id do animal a ser atualizado
    const idAnimal = parseInt(req.query.idAnimal as string);

    // Instanciando objeto Ave
    const novaAve = new Ave(nome, idade, genero, envergadura);

    // Chama o método para persistir a ave no banco de dados e armazena o resultado na variável
    const result = await Ave.atualizarAve(novaAve, idAnimal);

    if (result) {
        // se o resultado for **true**, retorna mensagem de sucesso
        return res.status(200).json('Ave atualizada com sucesso');
    } else {
        // se o resultado for **false**, retorna mensagem de erro
        return res.status(400).json('Não foi possível atualizar a ave no banco de dados');
    }
 }
}