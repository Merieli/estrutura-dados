export const pilha = () => {
    /**
     * Pilha:
     * - A pilha é uma estrutura de dados linear que segue a ordem LIFO (Last In, First Out) "Último a entrar, primeiro a sair". Exemplo: pilha de pratos, pilha de livros.
     * - Também conhecida como stack.
     * - São coleções de dados que também seguem os padrões das estruturas de dados lineares.
     * - É uma estrutura linear ordenada que não tem obrigatoriedade de seguir uma ordem de sequência.
     * - Cada elemento inserido respeita sua ordem de inserção
     * - É possível adicionar e remover elementos, sendo que ocorrem sempre na mesma extremidade da fila.
     * - Todas as iterações, inclusões e remoções de valores ocorrem sempre no topo
     * - Quanto mais próximo ao elemento do topo, mais rápido ele sai da fila
     * - Desempenham um papel importante para aplicações computacionais pois desempenham um papel de inversão ou reversão de processos. Exemplo: botão de voltar do navegador "que é um processo reverso ao que foi feito, onde é criado uma pilha com as páginas visitadas".
     */

    class Stack {
        elements: any[];

        constructor() {
            this.elements = [];
        }

        isEmpty() {
            return this.elements.length === 0;
        }

        push(element: any) {
            this.elements.push(element);
        }

        pop() {
            if (this.isEmpty()) {
                return 'Underflow';
            }
            return this.elements.pop();
        }

        peek() {
            return this.elements[this.elements.length - 1];
        }

        size() {
            return this.elements.length;
        }
    }
};
