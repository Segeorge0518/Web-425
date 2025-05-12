import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="faction-container">
    <h1>Character Factions</h1>
    <div *ngIf="characterFactions.length; else noFactions">
      <div *ngFor="let faction of characterFactions" class="faction-card">
        <h3>{{ faction.name }}</h3>
        <p>{{ faction.description }}</p>
      </div>
    </div>
    <ng-template #noFactions>
      <p>{{ noFactionsMessage }}</p>
    </ng-template>
  </div>
  `,
  styles: `
    .faction-container {
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    .faction-card {
      margin: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      width: 80%;
    }
  `
})
export class CharacterFactionComponent {
  characterFactions: any[] = [];
  noFactionsMessage: string = '';

  constructor(private http: HttpClient) {
    this.fetchCharacterFactions();
  }

  fetchCharacterFactions(): void {
    this.http.get('http://localhost:3000/api/character-factions').subscribe({
      next: (res: any) => {
        this.characterFactions = res;
      },
      error: (err) => {
        console.error('Error fetching character factions', err);
        this.noFactionsMessage = 'No factions found. Please try again later.';
      }
    });
  }
}
