import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray,ReactiveFormsModule } from '@angular/forms';
import { GuildListComponent } from '../guild-list/guild-list.component';

export interface Guild {
  guildName: string;
  description: string;
  type: string;
  acceptTerms: boolean;
  notificationPreference: string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
   <div class="create-guild-container">
    <div class="create-guild-container">
      <form [formGroup]="guildForm" (ngSubmit)="onSubmit()" class="create-guild-form">
        <h1>Create a New Guild</h1>
        <label for="guildName">Guild Name:</label>
        <input id="guildName" formControlName="guildName" required />

        <label for="description">Description:</label>
        <textarea id="description" formControlName="description" required></textarea>

        <label for="type">Type:</label>
        <select id="type" formControlName="type" required>
          <option value="Competitive">Competitive</option>
          <option value="Casual">Casual</option>
          <option value="Social">Social</option>
          <option value="Educational">Educational</option>
        </select>

        <label>
          <input type="checkbox" formControlName="acceptTerms" required />
          Accept Terms
        </label>

        <label>Notification Preference:</label>
        <label>
          <input type="radio" formControlName="notificationPreference" value="Email" required /> Email
        </label>
        <label>
          <input type="radio" formControlName="notificationPreference" value="SMS" required /> SMS
        </label>
        <label>
          <input type="radio" formControlName="notificationPreference" value="In-App" required /> In-App
        </label>

        <button type="submit" [disabled]="!guildForm.valid">Create Guild</button>
      </form>

      <div class="guilds-list">
        <app-guild-list [guild]="guild"> </app-guild-list>
      </div>
    </div>
  `,

  styles: `
  .create-guild-container {
    display: flex; flex-direction:
    column; width: 80%;
    align-items: center;
  }

  .feedback-form, .feedback {
    width: 100%;
    margin-bottom: 20px;
  }

  .feedback-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  .feedback-card {
    flex: 0 0 calc(50% - 20px);
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .guilds-list {
    list-style-type: none;
    padding: 0;
  }

  .guilds-list ul {
    list-style-type: none;
    background-color:rgb(221, 238, 233);
    margin:  10px;
  }

  .guilds-list li {
    padding: 10px;
  }

  #type {
    width: 400px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  label:first-of-type {
    margin-top: 0;
  }

  label:not(:first-of-type) {
    margin-top: 10px;
  }

  select {
    width: 20%;
    display: block;
    margin-bottom: 5px;
    padding: 8px;
    box-sizing: border-box;
  }

  textarea {
    width: 100%;
    margin-bottom: 5px;
    padding: 8px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    display: block;
    padding:8px;
    margin-bottom:
    10px;
    box-sizing: border-box;
    float: right;
  }

  input[type="checkbox"], input[type="radio"] {
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  fieldset {
    margin-bottom: 20px;
  }
`
})
export class CreateGuildComponent {
  guildForm: FormGroup;
  createdGuilds: Guild[] = [];

  @Output() guildUpdated = new EventEmitter<Guild>();

  constructor(private fb: FormBuilder) {
    this.guildForm = this.fb.group({
      guildName: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      notificationPreference: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.guildForm.valid) {
      this.createdGuilds.push(this.guildForm.value);
      this.guildForm.reset();
    }
  }
}
