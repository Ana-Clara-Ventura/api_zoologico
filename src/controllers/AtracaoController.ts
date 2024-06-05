import { Request, Response } from "express";
import { Atracao } from "../model/Atracao";

export class AtracaoController extends Atracao {
    public async novo(req: Request, res: Response) {
        try {
            // Desestruturando objeto recebido pelo front-end
            const { nomeAtracao, idHabitat } = req.body;

            // Instanciando objeto Ave
            const novaAtracao = new Atracao(nomeAtracao);

            let result = false;

            // verifica se o idHabitat não veio vazio do front-end
            if (idHabitat != undefined) {
                // Chama o método para persistir a atracao no banco de dados associando ao id
                result = await Atracao.cadastrarAtracao(novaAtracao, idHabitat);
            } else {
                // Chama o método para persistir a atracao no banco de dados
                result = await Atracao.cadastrarAtracao(novaAtracao);
            }

            // verifica se a query foi executada com sucesso
            if (result) {
                return res.status(200).json('Atração cadastrado com sucesso');
            } else {
                return res.status(400).json('Não foi possível cadastrar a atração no banco de dados');
            }
        }
        catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');

        }
    }
    public async buscar(req: Request, res: Response) {
        try {
            // cria objeto atracoes e atribui a ele o retorno do método listarAtracoes
            const atracoes = await Atracao.listarAtracoes();

            // retorna a lista de atracoes em formato json
            res.status(200).json(atracoes);
        }
        catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');

        }
    }
    public async deletar(req: Request, res: Response) {
        try {
            // recuperando o id da atração a ser removida
            const idAtracao = parseInt(req.query.idAtracao as string);

            // chama a função para remover a atração e armazena o resultado na variável
            const resultado = await Atracao.removerAtracao(idAtracao);

            if (resultado) {
                // se o resultado for **true**, retorna mensagem de sucesso
                return res.status(200).json('Atração foi removida com sucesso');
            } else {
                // se o resultado for **false**, retorna mensagem de erro
                return res.status(401).json('Erro ao remover atração');
            }
        }
        catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');

        }
    }
    public async atualizar(req: Request, res: Response) {
        try {
            // Desestruturando objeto recebido pelo front-end
            const { nomeAtracao } = req.body;
            // recuperando o id da atração a ser atualizada
            const idAtracao = parseInt(req.query.idAtracao as string);

            // Instanciando objeto Atração
            const novaAtracao = new Atracao(nomeAtracao);

            // Chama o método para persistir a ave no banco de dados e armazena o resultado na variável
            const resultado = await Atracao.atualizarAtracao(novaAtracao, idAtracao);

            if (resultado) {
                // se o resultado for **true**, retorna mensagem de sucesso
                return res.status(200).json('Atração foi alterada com sucesso');
            } else {
                // se o resultado for **false**, retorna mensagem de erro
                return res.status(401).json('Erro ao alterar atração');
            }
        }
        catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`)
            return res.status(400).json('Não foi possível cadastrar o ave no banco de dados');

        }
    }
}