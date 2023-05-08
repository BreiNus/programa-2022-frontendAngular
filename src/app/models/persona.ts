export class Persona {
  // la ?: significa que no es un campo obligatorio, en ocasiones va a tener el id y en otras no,
  //por ej, cuando cree una nueva persona no hay id, porque es la DB la que se lo asigna, en cambio cuando obtenga una persona o una lista de personas, si van a tener su id
  id?: number;
  nombrePersona: string;
  puestoTrabajo: string;
  sobreMi: string;
  localidad: string;
  telefono: number;
  email: string;
  gitHubPersonal: string;

  constructor(
    nombrePersona: string,
    puestoTrabajo: string,
    sobreMi: string,
    localidad: string,
    telefono: number,
    email: string,
    gitHubPersonal: string
  ) {
    this.nombrePersona = nombrePersona;
    this.puestoTrabajo = puestoTrabajo;
    this.sobreMi = sobreMi;
    this.localidad = localidad;
    this.telefono = telefono;
    this.email = email;
    this.gitHubPersonal = gitHubPersonal;
  }
}
