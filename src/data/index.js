const generarHorario = (inicio, fin) => {
    const listHorario = [];
    for (let index = inicio; index < fin; index++) {
        listHorario.push(`${index}:00 - ${index}:30`);
        listHorario.push(`${index}:30 - ${index + 1}:00`);
    }
    return listHorario;
};

export const HORARIOS = generarHorario(8, 20);

export const ENDPOINT = "https://reserva-motocicleta.herokuapp.com";
