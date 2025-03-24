import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
 <div class="details">
   <h1>Looking to build your next RPG?</h1>
   <br>
   <h2>Start Here!</h2>
   <p>
      This website is meant to streamline the creation of new assets for your next TTRPG! Not only do we provide tools for creating new assets such as character creation and world building, but we also provide you ways to store your assets and game notes! All you Dungeon Masters, lore keepers, and vigilant note takers, we have the tools for you!
   </p>
   <p>
      Our Character Maker allows you to fully customize your RPG protagonist. Choose from a wide variety of races, classes, skills, and abilities to create a character with unique attributes and backstory. Whether you're building a fierce warrior, a stealthy rogue, or a wise mage, you can tweak every detail to match your vision. The intuitive interface lets you seamlessly combine personality traits, appearances, and equipment to give your character depth and individuality.
   </p>
   <p>
      On the other hand, our World Builder helps you construct entire realms with ease. From cities and towns to expansive landscapes and hidden dungeons, our tools provide a rich array of options for designing your world’s geography, culture, and history. Develop intricate plots, lore, and factions that will keep your players engaged and immersed in the story.
   </p>
   <p>
      Whether you're creating a campaign for a tabletop RPG or crafting a world for a digital game, our platform offers endless possibilities to spark your creativity. Start designing today and embark on an unforgettable adventure!
   </p>

   <div class="imgContainer">
      <div class="img">
        <img src="assets/schurke.webp" alt="Image of a rouge">
        <p>Design your character!</p>
      </div>
      <div class="img">
        <img src="assets/waldlaeufer.webp" alt="Image of a ranger">
        <p>Write your story!</p>
      </div>
      <div class="img">
        <img src="assets/hexenmeister.webp" alt="Image of a warlock">
        <p>Plan your game!</p>
      </div>
    </div>
 </div>
  `,
  styles: ``
})
export class HomeComponent {

}
