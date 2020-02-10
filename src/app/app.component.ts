import { Component } from '@angular/core';
import{Router,ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';
import {TittleServiceService} from './tittle-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    private tittle:TittleServiceService
  )
  {



  }
  
  ngOnInit()
  {
  
  this.tittle.Pagetitle();
  }


}
