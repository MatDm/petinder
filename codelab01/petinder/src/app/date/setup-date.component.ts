import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Pet} from "../model/Pet";
import {PetService} from "../service/pet.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {environment} from "../../environments/environment";
import {Whatsapp} from "../model/Whatsapp";


@Component({
  selector: 'app-setup-date',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit {
  public pet$: Observable<Pet> | undefined;
  public backendUrl: string = environment.backendUrl;
  sendTextForm = this.formBuilder.group({
    name: ''
  })

  constructor(private _activatedRoute: ActivatedRoute, private _petService: PetService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let petName = this._activatedRoute.snapshot.params['name'];
    this.pet$ = this.getPet(petName);
  }

  getPet(name: string): Observable<Pet> {
    return this._petService.getPet(name);
  }


  onSendMessage() {
    this._petService.sendMessage(this.sendTextForm.value as Whatsapp);
    this.sendTextForm.reset();
  }
}
