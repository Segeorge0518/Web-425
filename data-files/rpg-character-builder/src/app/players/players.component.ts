export interface playersItems {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="heading">
        <h1>Players</h1>
        <p>Have a look at our list of players!</p>
      </div>
      <ul class="players-container">
        @for (item of players; track item){
        <li class="players-item">
          <div class="card">
            <h3>{{item.name}}</h3>
            <p>{{item.gender}}</p>
            <p>{{item.class}}</p>
            <p>{{item.startingLocation}}</p>
            <p>{{item.funFact}}</p>

          </div>
        </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .heading{
      text-align: center;
    }

    .players-container{
      display:flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
    }

    .players-item {
      flex: 0 1 calc(33.33% - 20px);
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .card {
      padding: 20px;
      background-color: white;
    }
  `]
})
export class PlayersComponent { players:
  playersItems[];

  constructor() {
    this.players = [
      {
        "name": "Vira",
        "gender": "Other",
        "class": "Warrior",
        "faction": "The Corvid Knights",
        "startingLocation": "Little Root Town",
        "funFact": "Once adopted cat that actually belonged to a nobel on accident."
      },
      {
        "name": "Jamison",
        "gender": "Male",
        "class": "Wizard",
        "faction": "The Summit Wardens",
        "startingLocation": "The Solemn Summit",
        "funFact": "Accidentally burnt down his home while trying to summon a familiar"
      },
      {
        "name": "Mina",
        "gender": "Female",
        "class": "Bard",
        "faction": "Lilysong of Brooksfield",
        "startingLocation": "Warbling Brooksfield",
        "funFact": "Once practiced for a performance so much that she woke up to find that she had lost her voice on the day."
      },
      {
        "name": "John",
        "gender": "Male",
        "class": "Warlock",
        "faction": "Pinegate's Wizards Guild",
        "startingLocation": "Pinesgate",
        "funFact": "Genuinely thought making a pact with the demon promising to help him pass his spellcasting course was a good idea."
      },
      {
        "name": "Salem",
        "gender": "Other",
        "class": "Artificer",
        "faction": "Steamcrest Smithies",
        "startingLocation": "Dewfront",
        "funFact": "They got kicked out of their first artificers guild because they tried putting out an oil fire by smothering it with flour."
      },
      {
        "name": "Marria",
        "gender": "Female",
        "class": "Rogue",
        "faction": "Roaring Strikers",
        "startingLocation": "Gloombrook",
        "funFact": "Wore a neon blouse on her first mission."
      },
      {
        "name": "Gin",
        "gender": "Male",
        "class": "Wizard",
        "faction": "Muterun's Apothecary",
        "startingLocation": "Windbarrow",
        "funFact": "Wanted to be bard, but he can't play a single instrument and is incredibly tone-deaf, so he learned potion crafting so he could join the family business."
      },
      {
        "name": "Mitch",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Westcliff Brigade",
        "startingLocation": "Harborvalle",
        "funFact": "Never met a dog he didn't love."
      },
      {
        "name": "Ila",
        "gender": "Female",
        "class": "Artificer",
        "faction": "Matchstick Architects",
        "startingLocation": "Brittlethorn Briars",
        "funFact": "Did an all-nighter once that lead them to think an idea they had was brilliant at the time, but when they woke up realized they had designed an everyday item."
      },
      {
        "name": "Illina",
        "gender": "Other",
        "class": "Bard",
        "faction": "Swallowsong",
        "startingLocation": "Riverwallow",
        "funFact": "Is still convinced they sound like a deer trying to sing underwater."
      }
    ]
  }
}
