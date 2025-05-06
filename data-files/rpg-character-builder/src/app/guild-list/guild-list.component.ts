import { Component, Input } from '@angular/core';
import { Guild } from '../create-guild/create-guild.component';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <h2>Created Guilds</h2>
    <ul>
      <li *ngFor="let guild of createdGuilds">
        <h3>{{ guild.guildName }}</h3>
        <p>{{ guild.description }}</p>
        <p>Type: {{ guild.type }}</p>
        <p>Notification Preference: {{ guild.notificationPreference }}</p>
      </li>
    </ul>
  `,
  styles: ['']
})
export class GuildListComponent {
  @Input() guild!: Guild;
}
