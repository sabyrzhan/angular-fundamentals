import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession} from '../shared';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
    .error input, .error select, .error textarea {
      background-color: #e3c3c5;
    }
    .error ::-webkit-input-placeholder {
      color: #999;
    }
    .error ::-moz-placeholder {
      color: #999;
    }
    .error :-moz-placeholder {
      color: #999;
    }
    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class CreateSessionComponent implements OnInit {
  @Output()
  saveNewSession = new EventEmitter();
  @Output()
  cancelCreateSession = new EventEmitter();

  name?: FormControl;
  presenter?: FormControl;
  duration?: FormControl;
  level?: FormControl;
  abstract?: FormControl;

  newSessionForm!: FormGroup;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(200)]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues: any): void {
    const session: ISession = {
      id: 0,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
    this.saveNewSession.emit(session);
  }

  cancelSession(): void {
    this.cancelCreateSession.emit();
  }
}