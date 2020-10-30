import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';
import {Posts} from '../posts.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls :['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
 @Output() postCreated = new EventEmitter<Posts>();

onAddPost(form:NgForm){
if(form.invalid){
  return;
}

  const post: Posts = {
    title: form.value.title,
    content: form.value.content
  };

    this.postCreated.emit(post);
  }

}
