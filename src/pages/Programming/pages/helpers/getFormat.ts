export const getFormat = (dateSelected: any) => {
  const fechaHora = new Date(dateSelected);

  const diaSemana = fechaHora.getUTCDay();

  const diaMes = fechaHora.getUTCDate();

  const mes = fechaHora.getUTCMonth();

  const año = fechaHora.getUTCFullYear();

  const hora = fechaHora.getHours();

  const minutos = fechaHora.getMinutes();

  const diasSemanaTexto = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const diaSemanaTexto = diasSemanaTexto[diaSemana];

  const mesesTexto = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const mesTexto = mesesTexto[mes];

  return `${diaSemanaTexto}, ${diaMes} de ${mesTexto} del ${año}, ${hora}:${minutos}`;
};
