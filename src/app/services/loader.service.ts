import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading = new BehaviorSubject(false);

  constructor() { }

  showLoader() {
    this.loading.next(true);
  }

  hideLoader() {
    this.loading.next(false);
  }
}
