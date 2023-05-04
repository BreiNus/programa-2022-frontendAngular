export class ExpAcademica {
  id?: number;
  nombreExpAcademica: string;
  descripcionExpAcademica: string;
  nivel: string;
  lugar: string;
  inicioEstudio: string;
  finEstudio: string;

  constructor(
    nombreExpAcademica: string,
    descripcionExpAcademica: string,
    nivel: string,
    lugar: string,
    inicioEstudio: string,
    finEstudio: string
  ) {
    this.nombreExpAcademica = nombreExpAcademica;
    this.descripcionExpAcademica = descripcionExpAcademica;
    this.nivel = nivel;
    this.lugar = lugar;
    this.inicioEstudio = inicioEstudio;
    this.finEstudio = finEstudio;
  }
}
