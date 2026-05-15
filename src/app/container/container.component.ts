import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  colorActual = 'Blanco';

  cambiarColor(color: string) {
    this.colorActual = color;
  }
}