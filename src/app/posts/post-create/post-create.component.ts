import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Output() postCreated = new EventEmitter();

  enteredTitle = "";
  enteredContent = "";
  newPost="No Content";
  onAddPost(){
    const post = {title: this.enteredTitle, content: this.enteredContent};
    console.log(post);
    this.postCreated.emit(post);//emiting our own event....
  }
  constructor() { }

  ngOnInit() {
  }

}
