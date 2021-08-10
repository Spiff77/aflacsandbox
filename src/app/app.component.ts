import {Component,  OnInit} from '@angular/core';

import {AuthService} from './auth.service';
import {User} from './model/user.model';
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentUserValue!: User|null;
  updateAvailable = false;

  constructor(private authService: AuthService, private swupdate: SwUpdate) {
    swupdate.available.subscribe(v => {
      this.updateAvailable = true;
    });
  }

  refreshApp(): void {
    window.location.reload();
  }

  async ngOnInit(): Promise<void> {
    this.authService.currentUser.subscribe( v => {
      console.log('NEW STATUS:', v);
      this.currentUserValue = v;
    });
  }

  login(): void {
    this.authService.login('admin', 'abcd1234').subscribe( v => console.log(v));
  }
  logout(): void {
    this.authService.logout();
  }

}



