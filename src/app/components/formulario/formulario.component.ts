import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categorias: any[]= [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
    { value: 'entertainment', nombre: 'Entretenimiento'},
    { value: 'health', nombre: 'Salud'},
    { value: 'science', nombre: 'Ciencia'},
    { value: 'sports', nombre: 'Deportes'},
    { value: 'technology', nombre: 'Tecnologia'}
  ];

  paises: any[]= [
    { value: 'fr', nombre: 'Francia'},
    { value: 'ar', nombre: 'Argentina'},
    { value: 'br', nombre: 'Brasil'},
    { value: 'mx', nombre: 'Mexico'},
    { value: 'gb', nombre: 'Reino Unido'},
    { value: 'us', nombre: 'Estados Unidos'},
  ];

  categoriaSeleccionada: string = 'general';
  paisSeleccionado: string = 'ar';
  constructor() {
    this.paisSeleccionado='ar';
    this.categoriaSeleccionada='general';
   }

  ngOnInit(): void {
    // this.buscarNoticia();
  }

  buscarNoticia(){
    // console.log(this.categoriaSeleccionada  + ' --- ' + this.paisSeleccionado)

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
