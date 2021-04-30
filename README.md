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

Chapter 5:
  * User DI to inject services. Services can be used to make 
    loose couples injectable classes.

Chapter 6:
  * Using routes to navigate between components
  * Guarding routes using `canActivate` to forbid access to 
    certain components. `canDeactivate` to protect losing 
    component state. For example, when page has data which 
    was not saved.
  * Style the current page links using `[routerLink]="active"` and 
    `[routerLinkActiveOptions]="{exact: true}"`
  * Lazily load submodules using route's `loadChildren` 
    property. 
  * Pre-load data to components using `resolve`. For example,
    data from REST service.

Chapter 7:
  * model based and template based form data processing
  * two-way binding using `[(ngModel)]` syntax. `()` called banan syntax and used to bind data from form to code, whereas `[]` is called form binding 
    used to bind or show data from code to template
  * models are defined using `interface`
  * validating forms using template-based and model-based form processing
  * creating custom validators

Chapter 8:
  * communication between chaild-parent components

Chapter 9:
  * use content projection to control the display of the content of the element
  * multiple content projects allow to map and show multiple contents

Chapter 10:
  * pipes and creation of custom pipe
  * sorting and filtering using OnChanges interface

Chapter 11:
  * 2 ways of injecting dependency into a class: InjectionToken and Inject decorator.
  * 2 ways of declaring providers: useValue -- use existing global variable or instance, useClass -- long version of declaring provider using class name

Chapter 12:
  * using Directives to process elements by custom attributes
  * calling native JS code (for example jQuery) in Angular
  * creating providers using native JS objects with useValue

Chapter 13:
  * adding custom validator using directive

Chapter 14:
  * HTTP request to server using RsJs Observables

Chapter 15:
  * Unit and isolated testing using Karma - test runtime env and jasmine - mocking fx. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Start backend server

Run `npm run server` and it will start server at `http://localhost:8808`.

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
