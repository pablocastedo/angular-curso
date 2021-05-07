import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes: string[] = ['Spiderman','Lobo','Goku','Pikachu'];

heroeBorrado: string = '';

borrarHeroe () {
this.heroeBorrado = this.heroes.shift () || '';

}

}


