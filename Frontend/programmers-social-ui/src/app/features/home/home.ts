import { Component, inject } from '@angular/core';
import { PostCard } from "../post/components/post-card/post-card";
import { SuggestedUsers } from "../../shared/components/suggested-users/suggested-users";
import { Title } from "../../shared/components/title/title";
import { SuggestedPosts } from "../../shared/components/suggested-posts/suggested-posts";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [PostCard, SuggestedUsers, Title, SuggestedPosts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  suggestedUsersTitle = "Suggested users";
  suggestedPostsTitle = "Suggested posts";
  navBtnTitle = "See all"

  // dependency injection
  router = inject(Router);

  seeAllSuggestedUsers(){
    console.log("Nav btn clicked for suggested users")
    this.router.navigate(['/explore', 'peoples']);
  }

  seeAllSuggestedPosts(){
    console.log("Nav btn clicked for suggested posts")
    this.router.navigate(['/explore', 'posts']);
  }
}
