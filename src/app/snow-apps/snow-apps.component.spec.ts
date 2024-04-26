import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowAppsComponent } from './snow-apps.component';

describe('SnowAppsComponent', () => {
  let component: SnowAppsComponent;
  let fixture: ComponentFixture<SnowAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowAppsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
