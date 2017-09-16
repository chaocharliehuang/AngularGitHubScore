import { Component } from '@angular/core';
import { UsernameService } from './username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  info: object;
  score: number;

  constructor(private _usernameService: UsernameService) { }

  onSubmit() {
    this._usernameService.getInfo(this.username, (info) => {
      this.info = info;
      this.score = info.public_repos + info.followers;
    });
  }
}