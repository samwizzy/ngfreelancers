import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signInIcon = faSignInAlt;
  signUpIcon = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
