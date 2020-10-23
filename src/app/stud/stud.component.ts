import { Component, OnInit } from '@angular/core';

import { Stud } from '../students';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit {

  stud: Stud = {
    id: 1,
    name: 'student'
  };
  studi = 'cleaver';

  constructor() { }

  ngOnInit(): void {
  }

}
