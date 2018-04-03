import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MarkdownModule, MarkdownComponent } from 'angular2-markdown';
import { AppComponent } from './app.component';
import { AngularMarkdownComponent } from './angular-markdown/angular-markdown.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgxEditorModule } from 'ngx-editor';
import { NgxEditorComponent } from './ngx-editor/ngx-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FroalaComponent } from './froala/froala.component';
import { QuillModule } from 'ngx-quill'
import { QuillComponent } from './quill/quill.component';
import { TinyMceModule, tinymceDefaultSettings } from 'angular-tinymce';
import { CKEditorModule } from 'ng2-ckeditor';
import { TinyMceComponent } from './tiny-mce/tiny-mce.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { CollapseModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AngularMarkdownComponent,
    HomeComponent,
    NgxEditorComponent,
    FroalaComponent,
    QuillComponent,
    TinyMceComponent,
    CkeditorComponent
],
  imports: [
    MarkdownModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgxEditorModule,
    QuillModule,    
    CollapseModule.forRoot(),
    CKEditorModule,
    TinyMceModule.forRoot(tinymceDefaultSettings()),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'angular-markdown', component: AngularMarkdownComponent },
      { path: 'ngx-editor', component: NgxEditorComponent },
      { path: 'froala', component: FroalaComponent },
      { path: 'quill', component: QuillComponent },
      { path: 'tiny-mce', component: TinyMceComponent },
      { path: 'ckeditor', component: CkeditorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
