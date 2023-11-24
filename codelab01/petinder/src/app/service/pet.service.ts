import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";
import {Whatsapp} from "../model/Whatsapp";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly _backendUrlPets: string;

  // private _pets: Observable<Pet[]>;

  constructor(private http: HttpClient) {
    this._backendUrlPets = `${environment.backendUrl}/pets`
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this._backendUrlPets).pipe(
      map(p => p.sort(
        (a: Pet, b: Pet) => {
          return a.name.localeCompare(b.name);
        }
      ))
    );
  }

  addPet(pet: Pet) {
    this.http.post<Pet>(this._backendUrlPets, pet).subscribe(
      () => alert("Pet added")
    );
  }

  getPet(name: string): Observable<Pet> {
    return this.http.get<Pet>(this._backendUrlPets + '/' + name);
  }

  deletePet(petId: number) {
    this.http.delete(this._backendUrlPets + '/' + petId).subscribe(
      () => alert("Pet deleted")
    );
  }

  sendMessage(whatsapp: Whatsapp) {
    this.http.post<Whatsapp>(this._backendUrlPets + '/sendText', whatsapp).subscribe(
      () => alert('Message sent!')
    )
  }
}
