import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';

export interface Character {
  id: number;
  name: string;
  class: string;
  gender: string;
}

export interface Group {
  characters: Character[];
  groupId: number;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [FormsModule, CommonModule, CharacterListComponent],
  template: `
  <div class="group-form-container">
    <div class="charForm">
      <form class="group-form" #characterGroupForm="ngForm" (ngSubmit)="addToGroup();">
      <h1>Complete the form below to create a new character</h1>
      <fieldset>
        <legend>Character Creator</legend>
        <div class="formName">
          <label for="characterName">Character Name: </label>
          <input type="text" id="characterName" name="characterName" [(ngModel)]="characterName" required>
        </div>

        <div class="formGender">
          <label for="gender">Gender: </label>
          <select name="characterGender" id="gender" [(ngModel)]="selectedGender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          </select>
        </div>

        <div class="formClass">
          <label for="characterClass">Character Class: </label>
          <select name="characterClass" id="characterClass" [(ngModel)]="selectedClass" ngModel>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
          </select>
        </div>

        <div class="groupSubmit">
         <input type="submit" value="Add to Group" />
        </div>

      </fieldset>
     </form>
    </div>

    <div class="group-summary">
      <app-character-list [group]="group"> </app-character-list>
    </div>
  </div>

  `,
  styles: [`
    .group-form-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }
    .charForm {
      width: 75%;
    }
    .formName{
      padding: 8px;
    }
    .formName input{
      width: 30%;
    }

    .formGender{
      padding: 8px;
    }
    .formClass{
      padding: 8px;
    }
    .groupSubmit {
      text-align: center;
    }
    .groupSubmit input {
      padding: 10px;
      font-size: 15px;
    }
  `]
})
export class CreateCharacterComponent {
  group: Group;
  characterName: string;
  selectedClass: string;
  selectedGender: string;

  @Output() groupUpdated = new EventEmitter<Group>();

  constructor() {
    this.group = { characters: [], groupId: 0 };
    this.selectedClass = 'Warrior';
    this.selectedGender = 'Other';
    this.characterName = '';
  }

  addToGroup() {
    const newCharacter: Character = {
      id: this.group.characters.length + 1,
      name: this.characterName,
      class: this.selectedClass,
      gender: this.selectedGender,
    };
    this.group.characters.push(newCharacter);
    console.log('Group after adding:', this.group);
    this.resetForm();
  }

  resetForm() {
    this.characterName = '';
    this.selectedClass = 'Warrior';
    this.selectedGender = '';
  }
}


