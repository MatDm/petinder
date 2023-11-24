import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText: string): Pet[] {
    if (!pets)
      return [];
    if(searchText === '')
      return pets;
    searchText.toLowerCase();
    return pets.filter(pet => pet.name.toLowerCase().includes(searchText));
  }

}
