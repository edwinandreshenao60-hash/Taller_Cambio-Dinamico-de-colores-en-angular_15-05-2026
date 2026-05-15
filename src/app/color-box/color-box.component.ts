import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  standalone: false,
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.scss'
})
export class ColorBoxComponent {
  @Input() receivedColor: string = 'Blanco';

  getColor(color: string): string {
    if (color === 'Rojo') {
      return 'red';
    }
    if (color === 'Azul') {
      return 'blue';
    }
    if (color === 'Verde') {
      return 'green';
    }
    if (color === 'Amarillo') {
      return 'yellow';
    }
    return 'white';
  }
}