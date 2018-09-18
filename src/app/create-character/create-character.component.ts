import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    { display: 'None', value: ''},
    { display: 'Light', value: 'light'},
    { display: 'Dark', value: 'dark'}
  ];

  service: CharacterService;

  constructor(service: CharacterService) {
    this.service = service;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm){
    if(submittedForm.invalid){
      return;
    }
    this.service.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }

}
