import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IEvent, ISession} from '../shared/index';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input()
  eventId? = 0;
  @Input()
  sessions?: ISession[];
  @Input()
  filter = '';
  @Input()
  sort = 'votes';
  filteredSessions: ISession[] = [];

  constructor(public authService: AuthService,
              private voterService: VoterService) {
  }

  toggleVote(session: ISession): any {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId!, session, this.authService.currentUser!.userName);
    } else {
      this.voterService.addVoter(this.eventId!, session, this.authService.currentUser!.userName);
    }

    if (this.sort === 'votes') {
      this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.authService.currentUser!.userName);
  }

  ngOnChanges(): void {
    if (this.sessions != null) {
      this.filterSessions();
      this.sort === 'name' ? this.filteredSessions.sort(sortByNameAsc) : this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(): void {
    if (this.filter === '') {
      this.filteredSessions = this.sessions!;
    } else {
      this.filteredSessions = this.sessions!.filter(s => s.level.toLowerCase() === this.filter);
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession): number {
  if (s1.name === s2.name) {
    return 0;
  } else if (s1.name > s2.name) {
    return 1;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession): number {
  return s2.voters.length - s1.voters.length;
}
