import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters = [
    {name: 'Sander', side:'light'},
    {name: 'Hanne', side:'dark'}
  ];

  constructor() { }

  getCharacters(side){
    if( side === 'all'){
      return this.characters;
    }

    return this.characters.filter( (char) => {
      return char.side === side;
    })
  }

  onSideChosen(charInfo){
    this.characters.filter( (char) => {
      if( char.name === charInfo.name){
        char.side = charInfo.side;
      }
    });
  }
}
