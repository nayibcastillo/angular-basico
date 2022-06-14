import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <h2>{{titulo}}</h2>
    <h3>La base es:<strong> {{valorBase}}</strong></h3>
    <button (click)="acumular(valorBase)">+{{valorBase}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-valorBase)">-{{valorBase}}</button>
    `
})
export class ContadorComponent{
    titulo:string = 'Contador App';
    numero:number = 10;
    valorBase:number = 5;
  
    acumular(valor:number){
      this.numero +=valor;
    }
}