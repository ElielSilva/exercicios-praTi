let sistemaReservas = {
    hoteis: [],
    reservas: [],
    adicionarHotel: function (id, nome, cidade, quartosTotais) {
        this.hoteis.push({ id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais });
    },
    buscarHoteisPorCidade: function (cidade) {
        return this.hoteis.filter(hotel => hotel.cidade === cidade);
    },
    fazerReserva: function (idReserva, idHotel, nomeCliente) {
        let hotel = this.hoteis.find(hotel => hotel.id === idHotel);
        if (hotel && hotel.quartosDisponiveis > 0) {
            this.reservas.push({ idReserva, idHotel, nomeCliente });
            hotel.quartosDisponiveis--;
            return true;
        }
        return false;
    },
    cancelarReserva: function (idReserva) {
        let reserva = this.reservas.find(reserva => reserva.idReserva === idReserva);
        if (reserva) {
            let hotel = this.hoteis.find(hotel => hotel.id === reserva.idHotel);
            hotel.quartosDisponiveis++;
            this.reservas = this.reservas.filter(reserva => reserva.idReserva !== idReserva);
            return true;
        }
        return false;
    },
    listarReservas: function () {
        return this.reservas;
    }
};

// Exemplo de uso:
sistemaReservas.adicionarHotel(1, "Hotel A", "Cidade A", 10);
sistemaReservas.adicionarHotel(2, "Hotel B", "Cidade B", 15);
sistemaReservas.adicionarHotel(3, "Hotel C", "Cidade A", 20);

console.log("Hoteis em Cidade A:", sistemaReservas.buscarHoteisPorCidade("Cidade A"));

console.log("Fazendo reserva:", sistemaReservas.fazerReserva(1, 1, "Cliente A"));
console.log("Fazendo reserva:", sistemaReservas.fazerReserva(2, 2, "Cliente B"));

console.log("Reservas:", sistemaReservas.listarReservas());

console.log("Cancelando reserva:", sistemaReservas.cancelarReserva(1));

console.log("Reservas após cancelamento:", sistemaReservas.listarReservas());
