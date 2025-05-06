// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CharacterListComponent } from './character-list.component';
// import { CommonModule } from '@angular/common';
// import {Character, CreateCharacterComponent} from '../create-character/create-character.component';


// describe('CharacterListComponent', () => {
//   let component: CharacterListComponent;
//   let fixture: ComponentFixture<CharacterListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [CharacterListComponent, CommonModule, CharacterListComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(CharacterListComponent);
//     component = fixture.componentInstance;

//     const mockGroup = {
//       orderId: 999, characters: [
//       { id: 2, name: 'Jill', class: 'Warrior', gender: "Female" },
//       { id: 1, name: 'Sia', class: "Mage", gender: "Other" }
//       ]
//     };

//     component.group = mockGroup;

//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('Should display character details correctly.', ()=> {
//     const mockGroup: Group = {
//       groupId: 1000,
//       characters:[
//         { id: 2, name: 'Jill', class: 'Warrior', gender: "Female" },
//         { id: 1, name: 'Sia', class: "Mage", gender: "Other" }
//         ]
//     };

//     component.group = mockGroup;
//     fixture.detectChanges();

//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('li').textContent).toContain('Warrior');
//     expect(compiled.querySelector('li').textContent).toContain('Sia');
//   });

//   it('should display message for empty character list', () => {
//     component.characters = [];
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('p').textContent).toContain('No characters created yet.');
//   });

//   it('should display message for empty guild list', () => {
//     component.guilds = [];
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('p').textContent).toContain('No guilds created yet.');
//   });
// });
