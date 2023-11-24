import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {Observable} from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NameFilterPipe} from "../pipes/name-filter.pipe";
import { FormBuilder } from '@angular/forms';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule, NameFilterPipe, ReactiveFormsModule, RouterLink],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit{
  // private _pets: Pet[] = [];
  public pets$: Observable<Pet[]> | undefined;
  public selectedPet: Pet | undefined;
  public searchText: string = '';
  private modalService = inject(NgbModal);
  createPetForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: ''
  })

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.pets$ = this.getPets();
  }
  getPets(): Observable<Pet[]>{
    // this.petService.getPets().subscribe(pets => this._pets = pets);
    return this.petService.getPets();
  }

  selectPet(pet: Pet){
    this.selectedPet = pet;
    // this.modalService.open(content, { centered: true });
  }

  // openVerticallyCentered(content: TemplateRef<any>) {
  //   this.modalService.open(content, { centered: true });
  // }

  protected readonly onsubmit = onsubmit;

  onAdd() {
    this.petService.addPet(this.createPetForm.value as Pet)
    this.createPetForm.reset();
  }

  onDelete(petId: number) {
    this.petService.deletePet(petId);
  }
}
