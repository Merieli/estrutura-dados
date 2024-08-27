class Plane:
    def __init__(self, model, airline, origin, destination, passengers, flight_number):
        self.model = model
        self.airline = airline
        self.origin = origin
        self.destination = destination
        self.passengers = passengers
        self.flight_number = flight_number

    @property
    def get_model(self):
        return f"Modelo: {self.model}"

    @property
    def get_airline(self):
        return f"Empresa: {self.airline}"

    @property
    def get_origin(self):
        return f"Origem: {self.origin}"

    @property
    def get_destination(self):
        return f"Destino: {self.destination}"

    @property
    def get_passengers(self):
        return f"Passageiros: {self.passengers}"

    @property
    def get_flight_number(self):
        return f"Número do Voo: {self.flight_number}"

    @property
    def info(self):
        return f"{self.get_model}, {self.get_airline}, {self.get_origin}, {self.get_destination}, {self.get_passengers}, {self.get_flight_number}"


class QueueOfPlanes:
    def __init__(self):
        self.planes = []

    @property
    def total_planes(self):
        return len(self.planes)

    def add_plane(self, plane):
        self.planes.append(plane)

    def take_off(self):
        return self.planes.pop(0) if self.planes else None

    def list_planes(self):
        return [plane.info for plane in self.planes]

    def next_plane_info(self):
        return self.planes[0].info if self.planes else None

    def plane_position(self, flight_number):
        for index, plane in enumerate(self.planes):
            if plane.flight_number == flight_number:
                return index + 1
        return -1


plane1 = Plane('Boeing 737', 'Gol', 'GRU', 'CGH', '150', 1234)
plane2 = Plane('Airbus A320', 'Azul', 'CGH', 'SDU', '100', 5678)
plane3 = Plane('Boeing 777', 'Latam', 'GRU', 'MIA', '300', 9876)
plane4 = Plane('Airbus A380', 'Emirates', 'DXB', 'GRU', '500', 5432)

queue_of_planes = QueueOfPlanes()
queue_of_planes.add_plane(plane1)
queue_of_planes.add_plane(plane2)
queue_of_planes.add_plane(plane3)
queue_of_planes.add_plane(plane4)

print('Total de aviões:', queue_of_planes.total_planes)

print('\nDecolando o primeiro avião da fila...', queue_of_planes.take_off().info)

print('\nTotal de aviões aguardando na fila de decolagem:', queue_of_planes.total_planes)

print('\nTodos os aviões na fila de decolagem:', queue_of_planes.list_planes())

print('\nPróximo avião a decolar: \n', queue_of_planes.next_plane_info())

print('\nPosição do voo 9876:', queue_of_planes.plane_position(9876))