import { Component, Input } from '@angular/core';
import { Group } from '../create-character/create-character.component';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="groupList">
        <h1>My Characters</h1>
        <ul>
          <li *ngFor="let character of group.characters">
            <strong>{{ character.name }}</strong>
            <br />
            Gender: {{ character.gender }}
            <br />
            Class: {{ character.class }}
          </li>
        </ul>
        <p *ngIf="group.characters.length === 0">No characters added to the group yet.</p>
    </div>
  `,
  styles: [`
    li {
      padding: 8px;
    }
    .groupList {
      text-align: center;
    }
    .groupList ul {
      text-align: left;
    }
  `]
})
export class CharacterListComponent {
  @Input() group!: Group;
}
