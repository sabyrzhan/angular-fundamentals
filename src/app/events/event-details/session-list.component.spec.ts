import {SessionListComponent} from './session-list.component';
import {ISession} from '../shared';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';

describe('Session list component', () => {
  let sessionList: SessionListComponent;
  let mockAuthService: AuthService, mockVoterService: VoterService;
  beforeEach(() => {
    sessionList = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      sessionList.sessions = [
          { name: 'session 1', level: 'intermediate'},
          { name: 'session 2', level: 'beginner'},
          { name: 'session 3', level: 'intermediate'}
        ] as ISession[];

      sessionList.filter = 'intermediate';
      sessionList.sort = 'name';
      sessionList.eventId = 3;

      sessionList.ngOnChanges();

      expect(sessionList.filteredSessions.length).toBe(2);
    });

    it('should sort the sessions correctly', () => {
      sessionList.sessions = [
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 3', level: 'beginner' },
        { name: 'session 2', level: 'intermediate' }
      ] as ISession[];

      sessionList.filter = '';
      sessionList.sort = 'name';
      sessionList.eventId = 3;

      sessionList.ngOnChanges();

      expect(sessionList.filteredSessions[2].name).toBe('session 3');
    });
  });
});
