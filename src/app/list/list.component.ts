import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activatedRoute: ActivatedRoute;
  service: CharacterService;
  constructor(activatedRoute: ActivatedRoute, service: CharacterService) {
    this.activatedRoute = activatedRoute;
    this.service = service;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.service.getCharacters(params['side'])
      }
    )
  }

}
