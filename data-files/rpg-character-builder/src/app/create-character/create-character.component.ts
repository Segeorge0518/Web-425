export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-create-character',
  template: `
    <div class="character-form-container">
      <form #characterForm="ngForm" (ngSubmit)="addCharacter()">
        <h1>Create a New Character</h1>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" ngModel required>

        <label for="gender">Gender</label>
        <select id="gender" name="gender" ngModel required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label for="class">Class</label>
        <select id="class" name="class" ngModel required>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>

        <input type="submit" value="Create Character">
      </form>

      <div class="character-list">
        <h2>Created Characters</h2>
        <ul>
          <li *ngFor="let character of characters">
            {{ character.name }} - {{ character.gender }} - {{ character.class }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .character-form-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    input, select {
      margin-bottom: 10px;
      padding: 8px;
      width: 100%;
    }
  `]
})
export class CreateCharacterComponent {
  characters: Character[] = [];

  addCharacter(form: NgForm) {
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000) + 1,
      name: form.value.name,
      gender: form.value.gender,
      class: form.value.class
    };
    this.characters.push(newCharacter);
    form.reset();
  }
}
