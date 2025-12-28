import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Vote } from "../../../../shared/components/vote/vote";

@Component({
  selector: 'app-post-footer',
  imports: [MatIconModule, CommonModule, Vote],
  templateUrl: './post-footer.html',
  styleUrl: './post-footer.css',
})
export class PostFooter {
  @Output() commentsClicked = new EventEmitter();
  @Input() voteCount!: WritableSignal<number>;
  @Input() commentCount!: WritableSignal<number>;

  toggleComments(){
    this.commentsClicked.emit();
    console.log("comments clicked")
  }

  upvoteClicked(){
    console.log("Upvote")
  }

  downvoteClicked(){
    console.log("Downvote")
  }
}
