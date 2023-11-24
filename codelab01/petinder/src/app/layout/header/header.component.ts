import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly _title: string;
  constructor() {
    this._title = 'Heavy Petting Zoo'
  }
  get title(): string {
    return this._title;
  }
}
