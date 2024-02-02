import express from "express";
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';


const server = express();
const port = 3000;


server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave(`Papagaio`, 30, `Masculino`, 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea')
    res.json([ave, reptil, mamifero]);
})

server.listen(port, () => {
    console.log(`Servidor esta escutando no endereço http://localhost:${port}`);
})

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    const ave = new Ave(nome, idade, genero, envergadura);
    res.json({ mensagem: "A nova ave do zoológico é:", ave })
})