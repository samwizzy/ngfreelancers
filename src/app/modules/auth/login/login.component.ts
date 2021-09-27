import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title: string = 'Freelancer';
  form: {
    email: string;
  };
  constructor() {}

  ngOnInit(): void {}

  handleChange = (event) => {};
}
