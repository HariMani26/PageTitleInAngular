
import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class TittleServiceService {
  default_title = 'Demo App'
  constructor(

    private router: Router,
    private activeRoute: ActivatedRoute,
    private title: Title
  ) { }

  Pagetitle() {
   
    this.router.events.pipe( filter(event => event instanceof NavigationEnd),
      map(() => this.activeRoute),
      map(route => route.firstChild),
      switchMap(route => route.data),
      map((data) => {
        return data && data.title `${data.title}`;
      })
    ).subscribe((current_title) => this.title.setTitle(current_title));
  }
 
}

