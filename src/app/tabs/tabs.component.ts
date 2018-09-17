import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    {name: 'Sander', side:'light'},
    {name: 'Hanne', side:'dark'}
  ];

  side = 'all';

  constructor() { }

  ngOnInit() {
  }

  onTab(side){
    this.side = side;
  }

  getCharacters(){
    if( this.side === 'all'){
      return this.characters.slice();
    }

    return this.characters.filter( (char) => {
      return char.side === this.side;
    })
  }

}
