import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Search } from "../search/search";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, MatIconModule, Search],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {


  onSearch(searchText: string){
    console.log("search text from nav : ", searchText)
  }
}
