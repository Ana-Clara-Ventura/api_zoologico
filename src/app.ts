import express from "express";
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from "./model/Habitat";
import { Animal } from "./model/Animal";
import { Atracao } from "./model/Atracao";
import { Zoologico } from "./model/Zoologico";


const server = express();
const port = 3000;


server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave(`Papagaio`, 30, `Masculino`, 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea');
    let habitat: Habitat = new Habitat ("Iceberg", [mamifero]);
    res.json([ave, reptil, mamifero, habitat]);

})

server.listen(port, () => {
    console.log(`Servidor esta escutando no endereço http://localhost:${port}`);
})

const habitat = new Habitat('Selva', [])

server.post('/habitat', (req, res) =>{
    const { nome, animais} = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
})

server.post('/atracao', (req, res) =>{
    const { nome, habitat} = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada');
})

server.post('/zoologico', (req, res) =>{
    const { nome, atracao} = req.body;
    const zoologico = new Zoologico(nome, atracao);
    console.log(zoologico);
    res.status(200).json('Zoologico criado');
})

