import {Component, inject, OnInit} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {SearchableSelectService} from "./searchable-select.service";

@Component({
  selector: 'app-searchable-mat-select',
  templateUrl: './searchable-select.component.html',
  styleUrl: './searchable-select.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInput, ReactiveFormsModule],
  host: {
    class: 'searchable-select-container'
  }
})
export class SearchableSelectComponent implements OnInit {
  private searchableSelectService  = inject(SearchableSelectService)
  selectedCountry?: number;
  searchControl = new FormControl('');
  options = this.searchableSelectService.getCountries
  filteredOptions = this.options;

  ngOnInit(){
    this.selectedCountry = 187;
  }

  onSearch() {
    const searchTerm = this.searchControl.value!.toLowerCase();
    this.filteredOptions = this.searchableSelectService.filterCountries(searchTerm)
  }

  isInputEmpty(): boolean {
    return !this.searchControl.value || this.searchControl.value.trim() === '';
  }
}
