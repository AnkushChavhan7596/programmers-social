import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PostHeader } from "../post-header/post-header";
import { PostBody } from "../post-body/post-body";
import { PostFooter } from "../post-footer/post-footer";
import { PostComment } from "../post-comment/post-comment";

@Component({
  selector: 'app-post-card',
  imports: [PostHeader, PostBody, PostFooter, PostComment],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css',
})
export class PostCard {
    isCommentsVisible = signal<boolean>(false);
    voteCount = signal<number>(10);
    commentCount = signal<number>(20);

    toggleComments(){
      this.isCommentsVisible.set(!this.isCommentsVisible());
    }
}
