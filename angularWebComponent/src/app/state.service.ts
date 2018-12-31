import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  person: any;

  fullname: string;

  constructor() {
  }
}
