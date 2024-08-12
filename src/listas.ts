export const listas = () => {
    /**
     * Lista linear:
     * - A lista linear é uma estrutura de dados que armazena um conjunto de elementos.
     * - Cada valor é representado por um nó (elemento) que contém um valor e uma referência para o próximo nó.
     * - A lista é composta por um conjunto de nós.
     * - O primeiro nó é chamado de nó cabeça (head).
     * - O último nó é chamado de nó cauda (tail).
     * - Esta estrutura tem sua própria ordem de entrada e saída.
     *
     * Podem ser separadas em ordenadas e não ordenadas.
     * - Listas desordenadas: é mais flexível, mas ainda existe referência entre os nós e elementos da  lista, porém os nós não são ordenados pelo valor.
     * - Listas ordenadas: os nós são ordenados de acordo com o valor do nó. Permite a inclusão, busca e remoção de nós e elementos. Se uma lista é ordenada, a cada operação realizada, a lista permanece ordenada. Por isso precisam existir validações para garantir a ordem.
     */

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

    console.log(
        '\x1b[36m%s\x1b[0m',
        '===== Algoritmo de Listas desordenadas =====',
    );

    /** Representa cada elemento da lista */
    class Node {
        data: number | string;
        next: Node | null;

        constructor(data: number | string) {
            this.data = data;
            this.next = null;
        }
    }

    class UnorderedList {
        head: null | any;
        constructor() {
            this.head = null;
        }

        isEmpty() {
            return this.head === null;
        }

        push(item: number | string) {
            const node = new Node(item);
            node.next = this.head;
            this.head = node;
        }

        length() {
            let current = this.head;
            let count = 0;

            while (current !== null) {
                count++;
                current = current.next;
            }

            return count;
        }

        find(item: any) {
            let current = this.head;

            while (current !== null) {
                if (current.data === item) {
                    return true;
                }
                current = current.next;
            }

            return false;
        }

        remove(item: string | number) {
            if (this.head === null) {
                return;
            }

            if (this.head.data === item) {
                this.head = this.head.next;
                return;
            }

            let current = this.head;
            let previous = null;
            let found = false;

            while (found === false) {
                if (current.data === item) {
                    previous.next = current.next;
                    found = true;
                    return;
                }

                previous = current;
                current = current.next;
            }
        }
    }

    const listUnordered = new UnorderedList();
    listUnordered.push(31);
    listUnordered.push(77);
    listUnordered.push(17);
    listUnordered.remove(77);

    console.debug(
        '🟣 ~ listas ~ listUnordered:',
        listUnordered.length(),
        '\n\n isEmpty:',
        listUnordered.isEmpty(),
        '\n\n find 31:',
        listUnordered.find(31),
    );

    console.log(
        '\x1b[36m%s\x1b[0m',
        '===== Algoritmo de Listas ordenadas =====',
    );

    /** É responsável por agrupar os nós e organizá-los  */
    class OrderedList {
        head: null | Node;

        constructor() {
            this.head = null;
        }

        isEmpty() {
            return this.head === null;
        }

        add(item: number | string) {
            let current: any = this.head;
            let previous = null;
            let stop = false;

            while (current !== null && !stop) {
                if (current.data > item) {
                    stop = true;
                } else {
                    previous = current;
                    current = current.next;
                }
            }

            const node = new Node(item);
            if (previous === null) {
                node.next = this.head;
                this.head = node;
                return;
            }
            node.next = current;
            previous.next = node;
        }

        length() {
            let current = this.head;
            let count = 0;

            while (current !== null) {
                count++;
                current = current.next;
            }

            return count;
        }

        search(item: number | string) {
            let current = this.head;
            let found = false;
            let stop = false;

            while (current !== null && !found && !stop) {
                if (current.data === item) {
                    found = true;
                } else if (current.data > item) {
                    stop = true;
                } else {
                    current = current.next;
                }
            }

            return found;
        }
    }

    const listOrdered = new OrderedList();

    listOrdered.add(25);
    listOrdered.add(38);
    listOrdered.add(60);

    console.debug(
        '🟣 ~ listas ~ listOrdered:',
        listOrdered.length(),
        '\n\n isEmpty:',
        listOrdered.isEmpty(),
        '\n\n search 38:',
        listOrdered.search(38),
    );
};
