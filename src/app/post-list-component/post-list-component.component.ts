import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  posts =[{
    content:'texte premier post',
    loveIts:1,
    title : 'Mon premier post',
  },
  {
    content:'texte second post',
    loveIts:2,
    title : 'Mon second post',
  },
  {
    content:'texte troisième post',
    loveIts:3,
    title : 'Mon troisième post',
  }];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
