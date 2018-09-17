import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  side = 'all';
  characters = [];
  charService: CharacterService;

  constructor( cs: CharacterService) {
    this.charService = cs;
  }

  ngOnInit() {
  }

  onTab(side){
    this.side = side;
  }

  getCharacters(){
    this.characters = this.charService.getCharacters(this.side);
    return this.characters;
  }



}
