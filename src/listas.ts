export const listas = () => {
    /** Listas lineares */
    const diasDaSemanaVetor = [
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
        'Domingo',
    ];

    // Array no JS é a mais simples ED para armazenamento em memória e trabalha com estruturas unidimensionais "Vetor" ou multidimensionais "Matriz". Permite acessar um elemento apenas passando seu índice.

    const usuariosMatriz = [
        ['Clark', 'Kent', 'Planeta Diário'],
        ['Gabriel', 'Fróes', 'Código Fonte'],
        ['Peter', 'Parker', 'Clarim Diário'],
        ['Vanessa', 'Weber', 'Código Fonte'],
    ];

    console.log(diasDaSemanaVetor[2]); // Quarta-feira
    console.log(usuariosMatriz[1][2]); // Código Fonte
};

export type Testes = 'Teste 1' | 'Teste 2' | 'Teste 3';
