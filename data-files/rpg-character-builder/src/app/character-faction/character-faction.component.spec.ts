import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CharacterFactionComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should handle errors when data is not found', () => {
    component.fetchCharacterFactions();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.error(new ErrorEvent('Network error'));

    expect(component.noFactionsMessage).toBe('No factions found. Please try again later.');
  });

  it('should correctly fetch a list of character factions', () => {
    const mockFactions = [
      { name: "The Iron Brotherhood", description: "Brave warriors." },
      { name: "The Arcane Order", description: "Powerful mages." }
    ];

    component.fetchCharacterFactions();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush(mockFactions);

    expect(component.characterFactions.length).toBe(2);
    expect(component.characterFactions).toEqual(mockFactions);
  });

  it('should update the characterFactions div when character factions are found', () => {
    const mockFactions = [
      { name: "The Silent Knives", description: "Skilled rogues." }
    ];

    component.fetchCharacterFactions();
    const req = httpMock.expectOne('http://localhost:3000/api/character-factions');
    req.flush(mockFactions);

    fixture.detectChanges();
    expect(component.characterFactions.length).toBe(1);
    expect(component.characterFactions[0].name).toBe("The Silent Knives");
  });
});
