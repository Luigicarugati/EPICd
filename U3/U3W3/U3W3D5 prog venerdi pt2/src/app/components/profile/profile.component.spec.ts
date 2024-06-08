// Nel file src/app/components/profile/profile.component.spec.ts
import { UserProfileComponent } from './profile.component'; // Correggi l'import

describe('UserProfileComponent', () => {
  // Test del componente
});

// Nel file src/app/components/users/users.component.spec.ts
import { ListComponentComponent } from '../users/users.component'; // Correggi l'import

describe('ListComponentComponent', () => {
  // Test del componente
});




import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('ProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
