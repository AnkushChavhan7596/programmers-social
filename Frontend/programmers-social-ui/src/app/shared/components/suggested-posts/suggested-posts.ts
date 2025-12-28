import { Component } from '@angular/core';
import { SuggestedPost } from "../suggested-post/suggested-post";

@Component({
  selector: 'app-suggested-posts',
  imports: [SuggestedPost],
  templateUrl: './suggested-posts.html',
  styleUrl: './suggested-posts.css',
})
export class SuggestedPosts {

}
