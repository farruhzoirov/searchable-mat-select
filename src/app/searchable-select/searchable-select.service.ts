import {countries} from "../dummy-countries";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class SearchableSelectService {
  get getCountries() {
    return countries;
  }
  filterCountries(searchableText: string) {
    return countries.filter(option =>
      option.viewValue.toLowerCase().includes(searchableText)
    );
  }
}
