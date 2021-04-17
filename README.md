# 📖 🤓 🖥 Pluralsight's "Angular Fundamentals" course 

## Progress summary
Chapter 2:
  * Install npm and node.
  * Install `@angular/core` required to bootstrap project
  * To bootstrap project: `npm install -g '@angular/core'`
  * Angular project must have at least one module which is called as root module. Any further modules created in the project are direct dependent modules of the root module. Each module consists from components 
    which itself consists from model and template.
Chapter 3:
  * Communication between template and the model is achieved using data-binding or property binding and property interpolation. For example, to bind methods to click `<button (click)="someMethod()"...` and 
    to bind property `<div [event]="eventFromChildComponent...`
  * Property interpolation is achieved using `{{property}}` and data-binding is achieved using `<componenet [componentElement]="thisElement"...`
Chapter 4:
  * To handle null elements we can use optionals. For example, `<span>{{property?.subProperty?.value}}</span>`
  * `<div [ngClass]="getMyCssClass()"...` and `<div [ngStyle]="getMyStyleObject()"...` can be used to apply styles and classes to element.
  * Can use various operators to element. For example `*ngFor, [ngSwitch] with *ngSwitchCase, *ngSwitchDefault, *ngIf`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
