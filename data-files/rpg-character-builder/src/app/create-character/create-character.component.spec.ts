import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [CreateCharacterComponent]
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(CreateCharacterComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
  //   component.addCharacter();
  //   expect(component.characters.id).toBeGreaterThan(0);
  //   expect(component.characters.id).toBeLessThanOrEqual(1000);
  //   expect(Number.isInteger(component.characters.id)).toBe(true);
  // });

  // it('should add a character with correct customization', () => {
  //   const form = { value: { name: 'Hero', gender: 'Male', class: 'Mage' } };
  //   component.addCharacter(form);
  //   const addedCharacter = component.characters[0];
  //   expect(addedCharacter.name).toBe('Hero');
  //   expect(addedCharacter.gender).toBe('Male');
  //   expect(addedCharacter.class).toBe('Mage');
  // });

  // it('should reset all form fields to their default values after reset is called', () => {
  //   const form = { value: { name: 'Hero', gender: 'Male', class: 'Mage' }, reset: jasmine.createSpy('reset') };
  //   component.addCharacter(form);
  //   expect(form.reset).toHaveBeenCalled();
  // });
});
