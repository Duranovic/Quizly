import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedDocumentsComponent } from './pinned-documents.component';

describe('PinnedDocumentsComponent', () => {
  let component: PinnedDocumentsComponent;
  let fixture: ComponentFixture<PinnedDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinnedDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
