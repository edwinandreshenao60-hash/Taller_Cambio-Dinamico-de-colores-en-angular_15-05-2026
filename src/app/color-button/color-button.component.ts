import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-button',
  standalone: false,
  templateUrl: './color-button.component.html',
  styleUrl: './color-button.component.scss'
})
export class ColorButtonComponent {
  @Input() buttonColor: string = 'white';
  @Input() buttonText: string = 'Blanco';
  @Output() colorClicked = new EventEmitter<string>();

  sendColor(): void {
    this.colorClicked.emit(this.buttonColor);
  }
}