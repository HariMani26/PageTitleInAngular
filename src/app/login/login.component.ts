import { Component, OnInit } from '@angular/core';
  import {TittleServiceService} from '../tittle-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private tittle:TittleServiceService
  ) { }

  ngOnInit() {
   
  }

}
