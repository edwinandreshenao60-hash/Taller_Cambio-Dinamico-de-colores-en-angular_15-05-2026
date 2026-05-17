import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  colorActual: string = 'white';

  changeColor(newColor: string): void {
    this.colorActual = newColor;
  }
}