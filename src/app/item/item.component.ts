import {Component, OnInit, Input} from '@angular/core';
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  charService: CharacterService;

  constructor( cs: CharacterService) {
    this.charService = cs;
  }

  ngOnInit() {
  }

  onSideButton(side){
    this.charService.onSideChosen({name: this.character.name, side: side});
  }

}
