import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="wrapper">
    <header class="banner">
      <h1>{{title}}</h1>
    </header>

    <main class="main-content">
      <nav class="navbar">
        <ul>
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/createCharacter">Create Character</a></li>
          <li><a routerLink="/createGuild">Create Guild</a></li>
          <li><a routerLink="/characterFaction">Character Faction</a></li>
          <li><a routerLink="/signIn">Sign In</a></li>
        </ul>
      </nav>

     <section class="content">
       <router-outlet />
     </section>
    </main>

    <footer class="footer">
      <nav class="footer-nav">
        <a routerLink="/home">Home</a> |
        <a routerLink="/players">Players</a> |
        <a routerLink="/createCharacter">Create Character</a> |
        <a routerLink="/createGuild">Create Guild</a> |
        <a routerLink="/signIn">Sign In</a>
      </nav>
      <p id="copyright">&copy; {{ year }} RPG Creation Hub  Img Source: https://dice-scroller.com/en/dungeons-and-dragons-classes-an-overview/</p>
    </footer>
  </div>
  `
  , styles: [
    `
    `
  ]
})
export class AppComponent {
  title = 'string';
  year: number;

  constructor() {
    this.title = 'RPG Creation Hub';
    this.year = new Date().getFullYear();
  }
}
