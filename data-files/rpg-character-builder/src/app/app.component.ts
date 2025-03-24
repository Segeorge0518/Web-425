import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <div class="wrapper">
    <header class="banner">
      <h1>RPG Creation Hub</h1>
    </header>

    <main class="main-content">
      <nav class="navbar">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a href="#">Character Creator</a></li>
          <li><a href="#">Campaign Planner</a></li>
          <li><a href="#">Lore Keeper</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

     <section class="content">
       <router-outlet />
     </section>
    </main>

    <footer class="footer">
      <nav class="footer-nav">
        <a routerLink="/">Home</a> |
        <a href="#">Character Creator</a> |
        <a href="#">Campaign Planner</a> |
        <a href="#">Lore Keeper</a> |
        <a href="#">Contact Us</a>
      </nav>
      <p id="copyright">&copy; 2025 RPG Creation Hub  Img Source: https://dice-scroller.com/en/dungeons-and-dragons-classes-an-overview/</p>
    </footer>
  </div>
  `
  , styles: [
    `
    `
  ]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
