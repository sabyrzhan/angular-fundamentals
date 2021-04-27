import {Injectable, InjectionToken} from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken('toastr');

export interface Toastr {
  success(message: string, title?: string): void;
  error(message: string, title?: string): void;
}
