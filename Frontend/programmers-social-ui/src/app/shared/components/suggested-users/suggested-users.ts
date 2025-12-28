import { Component } from '@angular/core';
import { SuggestedUser } from "../suggested-user/suggested-user";

@Component({
  selector: 'app-suggested-users',
  imports: [SuggestedUser],
  templateUrl: './suggested-users.html',
  styleUrl: './suggested-users.css',
})
export class SuggestedUsers {

}
