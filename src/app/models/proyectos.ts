export class Proyectos {
  id?: number;
  nombreProyecto: string;
  urlRepo: string;
  imgProyecto: string;
  descripcionProyecto: string;

  constructor(
    nombreProyecto: string,
    urlRepo: string,
    imgProyecto: string,
    descripcionProyecto: string
  ) {
    this.nombreProyecto = nombreProyecto;
    this.urlRepo = urlRepo;
    this.imgProyecto = imgProyecto;
    this.descripcionProyecto = descripcionProyecto;
  }
}
