import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { statusSwitch } from '../status-switch.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor (private statusSwitch: statusSwitch) {}

  ngOnInit(): void {
    this.users = this.statusSwitch.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.statusSwitch.onSetToActive(id);
  }
}
