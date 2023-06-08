import { Component, OnInit } from '@angular/core';
import { PostblogService } from './postblog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  post : any;
  titulosColumnas = ['código de usuario', 'código de post', 'titulo', 'descripción'];
  constructor(private postblogService: PostblogService) { }

  ngOnInit() {
    this.postblogService.retornar()
      .subscribe(result => this.post = result)
  }
}
