import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  @Input() loveIts: number = 0;
  @Input() created_at: Date = new Date();
  @Input() updated_at: Date = new Date();
  // @Input() myPost: Post;

  constructor() { }

  ngOnInit(): void {
    this.created_at = new Date();
  }

  addLike(){
    this.updated_at = new Date();
    this.loveIts +=1;
    // this.myPost.loveIts +=1;
  }

  dislike(){
    this.updated_at = new Date();
    this.loveIts -=1;
    // this.myPost.loveIts -=1;
  }

  getColor(){
    return this.loveIts < 0 ? "red" : "green";
  }

}

// class Post {
//   title: string;
//   content:string;
//   loveIts: number;
//   created_at: Date;

//   constructor(){
//     this.created_at = new Date();
//     this.loveIts= 0;
//   }
// }