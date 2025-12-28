import { Component } from '@angular/core';
import { SuggestedUser } from "../../../../shared/components/suggested-user/suggested-user";
import { Title } from "../../../../shared/components/title/title";

@Component({
  selector: 'app-peoples',
  imports: [SuggestedUser, Title],
  templateUrl: './peoples.html',
  styleUrl: './peoples.css',
})
export class Peoples {
  title: string = 'Suggested'
}
