export class ExpLaboral {
  id?: number;
  nombreExpLaboral: string;
  nombreCompania: string;
  inicioTrabajo: string;
  finTrabajo: string;
  descripcionTrabajo: string;

  constructor(
    nombreCompania: string,
    nombreExpLaboral: string,
    inicioTrabajo: string,
    finTrabajo: string,
    descripcionTrabajo: string
  ) {
    this.nombreCompania = nombreCompania;
    this.nombreExpLaboral = nombreExpLaboral;
    this.inicioTrabajo = inicioTrabajo;
    this.finTrabajo = finTrabajo;
    this.descripcionTrabajo = descripcionTrabajo;
  }
}
