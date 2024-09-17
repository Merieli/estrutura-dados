import { deque } from './deque';
import { fila } from './fila';
import { listas } from './listas';
import { matriz } from './matriz';
import { pilha } from './pilha';

listas();
pilha();
fila();
deque();
matriz();

class Plane {
    constructor(
        private model: string,
        private airline: string,
        private origin: string,
        private destination: string,
        private passengers: string,
        public flightNumber: number,
    ) {
        this.model = model;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
        this.passengers = passengers;
        this.flightNumber = flightNumber;
    }

    get getModel() {
        return `Modelo: ${this.model}`;
    }

    get getAirline() {
        return `Empresa: ${this.airline}`;
    }

    get getOrigin() {
        return `Origem: ${this.origin}`;
    }

    get getDestination() {
        return `Destino: ${this.destination}`;
    }

    get getPassengers() {
        return `Passageiros: ${this.passengers}`;
    }

    get getFlightNumber() {
        return `Número do Voo: ${this.flightNumber}`;
    }

    get info() {
        return `${this.getModel}, ${this.getAirline}, ${this.getOrigin}, ${this.getDestination}, ${this.getPassengers}, ${this.getFlightNumber}`;
    }
}

class QueueOfPlanes {
    planes: Plane[];

    constructor() {
        this.planes = [];
    }

    get totalPlanes() {
        return this.planes.length;
    }

    addPlane(plane: Plane) {
        this.planes.push(plane);
    }

    takeOff() {
        return this.planes.shift();
    }

    listPlanes() {
        const allPlanes = this.planes.map((plane) => plane.info);
        return allPlanes;
    }

    nextPlaneInfo() {
        return this.planes[0].info;
    }

    planePosition(flightNumber: number) {
        return (
            this.planes.findIndex(
                (plane) => plane.flightNumber === flightNumber,
            ) + 1
        );
    }
}

const plane1 = new Plane(
    'Boeing 737',
    'Gol',
    'Brasília - Brasil',
    'Canadá - Toronto',
    '200',
    1234,
);
const plane2 = new Plane(
    'Airbus A320',
    'Azul',
    'São Paulo - Brasil',
    'Rio de Janeiro - Brasil',
    '100',
    5678,
);
const plane3 = new Plane(
    'Boeing 777',
    'Latam',
    'São Paulo - Brasil',
    'Miami - USA',
    '300',
    9876,
);
const plane4 = new Plane(
    'Airbus A380',
    'Emirates',
    'Dubai - UAE',
    'São Paulo - Brasil',
    '500',
    5432,
);

const queueOfPlanes = new QueueOfPlanes();
queueOfPlanes.addPlane(plane1);
queueOfPlanes.addPlane(plane2);
queueOfPlanes.addPlane(plane3);
queueOfPlanes.addPlane(plane4);
// console.log('Total de aviões:', queueOfPlanes.totalPlanes);

// console.log('\nDecolando o primeiro avião da fila...', queueOfPlanes.takeOff());

// console.log(
//     '\nTotal de aviões aguardando na fila de decolagem:',
//     queueOfPlanes.totalPlanes,
// );

// console.log(
//     '\nTodos os aviões na fila de decolagem:',
//     queueOfPlanes.listPlanes(),
// );

// console.log('\nPróximo avião a decolar: \n', queueOfPlanes.nextPlaneInfo());

// console.log('\nPosição do voo 9876:', queueOfPlanes.planePosition(9876));

console.log('\n\n RECURSIVIDADE');

// Recursividade para somar todos os itens de uma lista

const list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const sumList = (list: number[]): number => {
    if (list.length === 0) {
        return 0;
    }

    if (list.length === 1) {
        return list[0];
    }

    return list[0] + sumList(list.slice(1));
};

console.log('Soma da lista:', sumList(list));
