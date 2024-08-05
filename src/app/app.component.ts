import { Component } from '@angular/core';
import {SearchableSelectComponent } from "./searchable-select/searchable-select.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchableSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
