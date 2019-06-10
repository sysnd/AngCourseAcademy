import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MasterLayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
