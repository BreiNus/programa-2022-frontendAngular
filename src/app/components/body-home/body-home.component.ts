import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.css'],
})
export class BodyHomeComponent implements OnInit {

  nombreUsuario!: string;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getUserName();
  }
}
