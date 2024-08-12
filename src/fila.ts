export const fila = () => {
    /**
     * Filas ou queue:
     * - São coleções de dados que também seguem os padrões das estruturas de dados lineares.
     * - Ou seja são nós ligados que tem noção de onde estão no espaço fazendo referência aos seus vizinhos.
     * - É uma estrutura linear ordenada que segue a ordem FIFO (First In, First Out) "Primeiro a entrar, primeiro a sair".
     * - Normalmente a inserção de novos elementos acontece no fim (rear) da fila, enquanto a remoção acontece no início (front) da fila
     * - Cada elemento inserido deve respeitar toda a sequência da fila, não pulando posições
     * - Exemplo no mundo real: fila de banco, fila de impressão, fila de processos, etc.
     */

    console.log('\x1b[36m%s\x1b[0m', '===== Algoritmo de Fila =====');

    class Queue {
        elements: any[];

        constructor() {
            this.elements = [];
        }

        isEmpty() {
            return this.elements.length === 0;
        }

        enqueue(element: any) {
            this.elements.push(element);
        }

        dequeue() {
            if (this.isEmpty()) {
                return 'Underflow';
            }
            return this.elements.shift();
        }

        size() {
            return this.elements.length;
        }
    }

    const queue = new Queue();
    console.log('fila vazia?', queue.isEmpty());

    queue.enqueue('Primeiro');
    queue.enqueue('Segundo');
    queue.enqueue('Terceiro');
    queue.enqueue('Quarto');

    console.log('fila', queue.elements);

    console.log('removendo', queue.dequeue());
    console.log('removendo', queue.dequeue());
    console.log('fila', queue.elements);
};
