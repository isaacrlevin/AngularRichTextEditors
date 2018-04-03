import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'ngx-editor',
  templateUrl: './ngx-editor.component.html',
  styleUrls: ['./ngx-editor.component.css']
})
export class NgxEditorComponent implements OnInit {

  title = 'ngx-editor';
  latestRelease: any = [];
  private subscription: Subject<any> = new Subject();

  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Type something. Test the Editor... ヽ(^。^)丿',
    translate: 'no'
  };

  htmlContent = '';

  /**
   * @param _appService service for app component
   */
  constructor() { }

  getLatestRelease() {

  }

  ngOnInit() {
    this.getLatestRelease();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
