import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  @Output() NavBarAtualizar: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
