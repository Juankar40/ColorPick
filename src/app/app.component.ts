import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './componentes/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BuscadorComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ColorPick';
  colores: any[] = [];
}
