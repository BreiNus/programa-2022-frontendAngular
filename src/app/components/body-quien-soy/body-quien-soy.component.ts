import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-quien-soy',
  templateUrl: './body-quien-soy.component.html',
  styleUrls: ['./body-quien-soy.component.css'],
})
export class BodyQuienSoyComponent implements OnInit {

  /*
  miQuienSoy:any;
  */
  constructor(
    /*private datosPortfolio: PortfolioService*/
  ) { }

  ngOnInit(): void {
    /*
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miQuienSoy=data;
    });
    */
  }
}
