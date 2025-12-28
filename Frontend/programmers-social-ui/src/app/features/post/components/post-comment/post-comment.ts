import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Vote } from "../../../../shared/components/vote/vote";

@Component({
  selector: 'app-post-comment',
  imports: [MatIconModule, Vote],
  templateUrl: './post-comment.html',
  styleUrl: './post-comment.css',
})
export class PostComment {
  @Input() voteCount:number = 0;

  upvoteClicked(){
    console.log("comment Upvote")
  }

  downvoteClicked(){
    console.log("comment Downvote")
  }
}
