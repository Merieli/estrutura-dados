import { fila } from './fila';
import { listas } from './listas';
import { pilha } from './pilha';

listas();
pilha();
fila();

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

const plane1 = new Plane('Boeing 737', 'Gol', 'GRU', 'CGH', '150', 1234);
const plane2 = new Plane('Airbus A320', 'Azul', 'CGH', 'SDU', '100', 5678);
const plane3 = new Plane('Boeing 777', 'Latam', 'GRU', 'MIA', '300', 9876);
const plane4 = new Plane('Airbus A380', 'Emirates', 'DXB', 'GRU', '500', 5432);

const queueOfPlanes = new QueueOfPlanes();
queueOfPlanes.addPlane(plane1);
queueOfPlanes.addPlane(plane2);
queueOfPlanes.addPlane(plane3);
queueOfPlanes.addPlane(plane4);
console.log('Total de aviões:', queueOfPlanes.totalPlanes);

console.log('\nDecolando o primeiro avião da fila...', queueOfPlanes.takeOff());

console.log(
    '\nTotal de aviões aguardando na fila de decolagem:',
    queueOfPlanes.totalPlanes,
);

console.log(
    '\nTodos os aviões na fila de decolagem:',
    queueOfPlanes.listPlanes(),
);

console.log('\nPróximo avião a decolar: \n', queueOfPlanes.nextPlaneInfo());

console.log('\nPosição do voo 9876:', queueOfPlanes.planePosition(9876));
