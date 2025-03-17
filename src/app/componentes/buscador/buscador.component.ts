import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColoresService } from '../../servicios/colores.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  title = 'ColorPick';

  @Output() coloresEmitir = new EventEmitter<any[]>();  
  query: string = '';

  constructor(private coloresServicio : ColoresService){}

  colores : any = []

  getPaleta(query : string): void {  
    this.coloresServicio.getColores(query).subscribe(data => {
      this.coloresEmitir.emit(data)
    });
  }
}
