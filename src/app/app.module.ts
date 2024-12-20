import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './global_comman/home/home.component';
import { HeaderComponent } from './global_comman/header/header.component';
import { SidenavComponent } from './global_comman/sidenav/sidenav.component';
import { FooterComponent } from './global_comman/footer/footer.component';
import { LoginComponent } from './global_comman/login/login.component';
import { TestComponent } from './global_comman/test/test.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './global_comman/signup/signup.component';
import { SelectavatarComponent } from './global_comman/selectavatar/selectavatar.component';
import { DataTransferService } from './_secondary_services/data-transfer.service';
import { TutorialSubmissionComponent } from './module1_exam_prep/game1_tutorials/tutorial-submission/tutorial-submission.component';
import { MindmapSubmissionComponent } from './module1_exam_prep/game1_mindmaps/mindmap-submission/mindmap-submission.component';
import { ViewTutorialsComponent } from './module1_exam_prep/game1_tutorials/view-tutorials/view-tutorials.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    LoginComponent,
    TestComponent,
    SignupComponent,
    SelectavatarComponent,
    TutorialSubmissionComponent,
    MindmapSubmissionComponent,
    ViewTutorialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
