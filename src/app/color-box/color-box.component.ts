import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  standalone: false,
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.scss'
})
export class ColorBoxComponent {
  @Input() receivedColor: string = 'White';
}