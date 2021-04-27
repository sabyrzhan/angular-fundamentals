import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ISession} from '../shared/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input()
  sessions?: ISession[];
  @Input()
  filter = '';
  @Input()
  sort = 'votes';
  filteredSessions: ISession[] = [];

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
