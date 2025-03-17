import { Component, Input } from '@angular/core';
import { ColoresService } from '../../servicios/colores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() colores: any[] = [];  
  
  copyColorCode(code : any){
    this.copyToClipboard(code.colorCodigo)
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
      .then(() => console.log('Copiado al portapapeles'))
      .catch(err => console.error('Error al copiar', err));
  }
}
