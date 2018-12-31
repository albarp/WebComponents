import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public people = [
    {
      'Name': 'John',
      'Surname': 'Doe'
    },
    {
      'Name': 'Billy',
      'Surname': 'Cotton'
    }
  ];

  get fullName(): string {
    return this.state.fullname;
  }

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  onClick(person): void {
    this.state.person = person;
  }

}
