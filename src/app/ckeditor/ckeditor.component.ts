import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
content: string
  constructor() {
    this.content = '<p>Hello <strong>World !</strong></p>'
   }

  ngOnInit() {
  }

}
