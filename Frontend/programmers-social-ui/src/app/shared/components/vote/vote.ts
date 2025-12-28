import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { single } from 'rxjs';

@Component({
  selector: 'app-vote',
  imports: [MatIconModule],
  templateUrl: './vote.html',
  styleUrl: './vote.css',
})
export class Vote {
  @Input() voteCount!:number;
  @Output() upvote = new EventEmitter<void>();
  @Output() downvote = new EventEmitter<void>();

  upvoted = signal<boolean>(false);
  downvoted = signal<boolean>(false);

  upvoteClicked(){
    this.upvote.emit();
    this.upvoted.set(true);
    this.downvoted.set(false);
  }

  downvoteClicked(){
    this.downvote.emit();
    this.upvoted.set(false);
    this.downvoted.set(true);
  }
}
