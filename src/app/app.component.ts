import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listNoticias: any[]= [];
  loading= false;

  constructor(private noticiasService: NoticiasService){

  }


  buscarNoticia(parametros: any){
    // console.log(parametros);
    this.listNoticias = [];
    this.loading=true;

    setTimeout(() => {
      this.noticiasService.getNoticias(parametros).subscribe(data=> {
        // console.log(data);
        this.loading=false;
        this.listNoticias= data.articles;
      }, error => {
        console.log(error);
        this.loading=false;
      });
    }, 2000);


  }
}
