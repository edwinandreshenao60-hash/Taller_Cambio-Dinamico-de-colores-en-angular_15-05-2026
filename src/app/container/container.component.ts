import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  currentColor: string = 'Blanco';

  updateColor(color: string): void {
    this.currentColor = color;
  }
}