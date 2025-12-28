import { Component } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate';

@Component({
  selector: 'app-suggested-post',
  imports: [TruncatePipe],
  templateUrl: './suggested-post.html',
  styleUrl: './suggested-post.css',
})
export class SuggestedPost {

}
