import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**Unit test 1 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**Unit test 2 */
  it('should correctly display a list of players', ()=> {
    const compiled = fixture.nativeElement as HTMLElement;
    const playersItems = compiled.querySelectorAll('.players-item');
    expect(playersItems.length).toEqual(component.players.length);
  });
});
