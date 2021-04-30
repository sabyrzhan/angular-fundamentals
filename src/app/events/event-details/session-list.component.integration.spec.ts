import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SessionListComponent} from './session-list.component';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {DurationPipe} from '../shared';
import {By} from '@angular/platform-browser';
import {UpvoteComponent} from './upvote.component';
import {CollapsibleWellComponent} from '../../common';

describe('Session list component', () => {
  let mockAuthService: AuthService;
  let mockVoterService: VoterService;
  let fixture: ComponentFixture<SessionListComponent>;
  let sessionList: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(() => {
    mockAuthService = { isAuthenticated: () => true, currentUser: { userName: 'Joe' }} as AuthService;
    mockVoterService = { userHasVoted: () => true } as any;
    TestBed.configureTestingModule({
      declarations: [
        SessionListComponent,
        DurationPipe
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SessionListComponent);
    sessionList = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement;
  });

  describe('initial display', () => {
    it('should have the correct name', () => {
      sessionList.sessions = [
        {
          name: 'Session 1', id: 1, presenter: 'John', duration: 1, level: 'beginner', abstract: 'some abstract',
          voters: ['abc', 'def']
        }
      ];
      sessionList.filter = '';
      sessionList.sort = 'name';
      sessionList.eventId = 1;
      sessionList.ngOnChanges();

      fixture.detectChanges();

      expect(element.querySelector('[well-title]')!.textContent).toContain('Session 1');
      expect(debugElement.query(By.css('[well-title]'))!.nativeElement.textContent).toContain('Session 1');
    });
  });
});
