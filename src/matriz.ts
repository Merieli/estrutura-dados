export const matriz = () => {
    class Matriz {
        matriz: any[];
        rows: any[];
        columns: any[];

        lengthRows: number;
        lengthColumns: number;

        constructor(rows: number, columns: number) {
            this.matriz = [];
            this.rows = new Array(rows);
            this.columns = new Array(columns);
            this.lengthRows = rows;
            this.lengthColumns = columns;

            for (let i = 0; i < rows; i++) {
                this.matriz[i] = new Array(columns);
            }
        }

        setElement(row: number, column: number, value: any) {
            if (row >= this.lengthRows || column >= this.lengthColumns) {
                return 'Out of bounds';
            }

            this.matriz[row][column] = value;
        }

        getElement(row: number, column: number) {
            if (row >= this.lengthRows || column >= this.lengthColumns) {
                return 'Out of bounds';
            }

            return this.matriz[row][column];
        }

        display() {
            for (let indexRow = 0; indexRow < this.lengthRows; indexRow++) {
                let row = '';
                for (
                    let indexColumn = 0;
                    indexColumn < this.lengthColumns;
                    indexColumn++
                ) {
                    row += `| ${this.matriz[indexRow][indexColumn]} `;
                }
                console.log(row + '|');
            }
        }
    }

    const matriz = new Matriz(3, 3);

    console.log('====================================');
    console.log('Inserindo um elemento na posição 0, 0');
    matriz.setElement(0, 0, 'Algum teste');

    console.log('Inserindo um elemento na posição 0, 1');
    matriz.setElement(0, 1, 'Outro teste');

    console.log('Inserindo um elemento na posição 0, 2');
    matriz.setElement(0, 2, 'Mais um teste');

    console.log('Inserindo um elemento na posição 1, 0');
    matriz.setElement(1, 0, 'Testes');

    matriz.display();

    console.log('Inserindo um elemento na posição 3, 2');
    matriz.setElement(2, 1, 'Olha que bacana');
    matriz.display();
    console.log('====================================');
};
