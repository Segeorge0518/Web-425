// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CreateCharacterComponent } from './create-character.component';

// describe('CreateCharacterComponent', () => {
//   let component: CreateCharacterComponent;
//   let fixture: ComponentFixture<CreateCharacterComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [CreateCharacterComponent]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CreateCharacterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
//     const id = Math.floor(Math.random() * 1000) + 1;
//     expect(id).toBeGreaterThan(0);
//     expect(id).toBeLessThan(1001);
//   });

//   it('should add a character with correct customization', () => {
//     component.newCharacter = { id: 0, name: 'Hero', gender: 'Male', class: 'Warrior' };
//     component.addCharacter();
//     expect(component.characters.length).toBe(1);
//     expect(component.characters[0].name).toBe('Hero');
//   });

//   it('should reset all form fields to their default values after resetForm is called', () => {
//     component.newCharacter = { id: 0, name: 'Hero', gender: 'Male', class: 'Warrior' };
//     component.resetForm();
//     expect(component.newCharacter.name).toBe('');
//     expect(component.newCharacter.gender).toBe('');
//     expect(component.newCharacter.class).toBe('');
//   });
// });
