import { Component, OnInit } from '@angular/core';
import { statusSwitch } from '../status-switch.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor (private statusSwitch: statusSwitch) {

  }

  ngOnInit(): void {
    this.users = this.statusSwitch.activeUsers;
  }

  onSetToInactive(id: number) {
    this.statusSwitch.onSetToInactive(id);
  }
}
