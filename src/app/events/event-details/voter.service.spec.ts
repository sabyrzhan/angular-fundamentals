import { VoterService } from './voter.service';
import {ISession} from '../shared';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import any = jasmine.any;

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj<HttpClient>('mockHttp', [
      'delete', 'post'
    ]);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from list', () => {
      mockHttp.delete.and.returnValue(of(false));
      const session = { id: 6, voters: ['joe', 'john']};
      voterService.deleteVoter(3, session as ISession, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with right URL', () => {
      mockHttp.delete.and.returnValue(of(false));
      const session = { id: 6, voters: ['joe', 'john']};
      voterService.deleteVoter(3, session as ISession, 'joe');

      const userName = 'joe';
      const eventId = 3;
      expect(mockHttp.delete)
        .toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`, any(Object));
    });
  });

  describe('addVoter', () => {
    it('should call http.post with right URL', () => {
      mockHttp.post.and.returnValue(of(false));
      const session = { id: 6, voters: ['joe', 'john']};
      voterService.addVoter(3, session as ISession, 'bro');

      const userName = 'bro';
      const eventId = 3;
      expect(mockHttp.post)
        .toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${userName}`, {}, any(Object));
    });
  });
});
