import { Component, OnInit } from '@angular/core';
import {UperrcasePipe} from './pipes/uperrcase.pipe'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UperrcasePipe]  
})
export class AppComponent implements OnInit{

  constructor(
    private _upper: UperrcasePipe
  ){

  }
  lista= [
    {id:1,nombre:'pacific boss',precio:7.90},
    {id:2,nombre:'golden times',precio:7.10},
    {id:3,nombre:'aast week',precio:7.20},
    {id:4,nombre:'ella y yo',precio:7.30},
    {id:5,nombre:'zngular 5',precio:7.40}
  ]

ngOnInit(){

  alert(this._upper.transform(this.lista[0].nombre))
}
}
