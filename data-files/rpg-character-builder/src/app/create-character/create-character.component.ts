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
