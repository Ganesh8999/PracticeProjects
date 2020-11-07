import { PostModel } from "./../post-model";
import { Component, OnInit, Input } from "@angular/core";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-vote-button",
  templateUrl: "./vote-button.component.html",
  styleUrls: ["./vote-button.component.css"],
})
export class VoteButtonComponent implements OnInit {
  @Input() post: PostModel;

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  downvoteColor: "red";
  upvoteColor: "blue";

  constructor() {}

  ngOnInit(): void {}

  downvotePost() {}

  upvotePost() {}
}
