import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModosJuegoPage } from './modos-juego.page';

describe('ModosJuegoPage', () => {
  let component: ModosJuegoPage;
  let fixture: ComponentFixture<ModosJuegoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModosJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
