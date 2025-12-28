import { Component } from '@angular/core';
import { Title } from "../../../../shared/components/title/title";
import { SuggestedPost } from "../../../../shared/components/suggested-post/suggested-post";

@Component({
  selector: 'app-posts',
  imports: [Title, SuggestedPost],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {
  title: string = 'Suggested'
}
