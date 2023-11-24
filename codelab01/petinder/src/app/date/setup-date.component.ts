import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Pet} from "../model/Pet";
import {PetService} from "../service/pet.service";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-setup-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit {
  public pet$: Observable<Pet> | undefined;
  sendTextForm: any;

  constructor(private _activatedRoute: ActivatedRoute, private _petService: PetService) {
  }

  ngOnInit(): void {
    let petName = this._activatedRoute.snapshot.params['name'];
    this.pet$ = this.getPet(petName);
  }

  getPet(name: string): Observable<Pet> {
    return this._petService.getPet(name);
  }


}
