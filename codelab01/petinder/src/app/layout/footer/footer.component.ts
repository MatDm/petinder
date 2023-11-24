import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly _year: number;
  constructor() {
    this._year = new Date().getFullYear();
  }
  get year(): number {
    return this._year;
  }
}
