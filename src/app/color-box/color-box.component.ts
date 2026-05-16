import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  standalone: false,
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.scss'
})
export class ColorBoxComponent {
  @Input() receivedColor: string = 'white';

  get colorName(): string {
    const colores: { [key: string]: string } = {
      'white': 'Blanco',
      'red': 'Rojo',
      'blue': 'Azul',
      'green': 'Verde',
      'yellow': 'Amarillo'
    };
    return colores[this.receivedColor] || 'Blanco';
  }
}