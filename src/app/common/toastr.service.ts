import {Injectable} from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
  success(message: string, title?: string): void {
    toastr.success(message, title);
  }
}
