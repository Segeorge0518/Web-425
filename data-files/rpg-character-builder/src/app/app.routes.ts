import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'signIn',
    component: SigninComponent
  },
  {
    path: 'createCharacter',
    component: CreateCharacterComponent
  },
  {
    path: 'createGuild',
    component: CreateGuildComponent
  },
  {
    path: 'characterFaction',
    component: CharacterFactionComponent
  },
];
