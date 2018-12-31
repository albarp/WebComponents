import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWebComponent';

  fullName: string;

  get person() {
    return this.state.person;
  }

  constructor(private state: StateService) {
  }

  onWebComponentClicked(event: any) {
    console.log('clicked in angular');
    if (this.person) {
      this.fullName = '' +  event.person.Name + event.person.Surname;
    }
  }
}
