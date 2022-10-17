import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmissionsMapComponent } from './submissions-map/submissions-map.component';
import { SubmissionsListComponent } from './submissions-list/submissions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubmissionsComponent,
    SubmissionsMapComponent,
    SubmissionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
