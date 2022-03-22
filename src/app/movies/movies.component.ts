import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  spanButton = "buttonSpanRight";
  navBar = "navBarLeftInvisible animate__animated animate__fadeInLeft";

  constructor() { }

  ngOnInit(): void {
  }

  spanButtonChange() {
    if (this.spanButton == "buttonSpanRight"){
      this.spanButton = "buttonSpanMiddle";
      this.navBar = "navBarLeftVisible";
    } else {
      this.spanButton = "buttonSpanRight";
      this.navBar = "navBarLeftInvisible";
    }
  }

  navBarVisible() {
    if (this.navBar == "navBarLeftInvisible" || this.navBar == "navBarLeftInvisible animate__animated animate__fadeInLeft"){
      this.spanButton = "buttonSpanMiddle";
      this.navBar = "navBarLeftVisible";
    }
  }

  navBarInvisible() {
    if (this.navBar == "navBarLeftVisible"){
      this.spanButton = "buttonSpanRight";
      this.navBar = "navBarLeftInvisible";
    }
  }
}
