import { Teste } from './teste';

const teste = {
    nome: 'Teste',
    idade: 20,
};

(window as any).test = '23 ';
const isObject = { lsals: 'sas' };

const isTrue = true;
const isFalse = 0 + 1 === 2;
if (isTrue == isFalse) return;

export type Testes = string[];

const bla = new Teste();

const variabel = 'Teste';
export const anyFunction = (param: Teste) => {};

class ObjetoClass {
    constructor() {}
}

interface ObjetoInterface {
    nome: string;
}

interface IgualetoInterface {
    nome: string;
}

type ObjetoType = {
    nome: string;
};

enum ObjetoEnum {
    NOME = 'nome',
}
