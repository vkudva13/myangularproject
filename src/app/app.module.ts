import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { SqrtPipe } from './sqrt.pipe';
import { RevstrPipe } from './revstr.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { PcgamesComponent } from './pcgames/pcgames.component';
import { PsgamesComponent } from './psgames/psgames.component'
import { RouterModule } from '@angular/router';
import { PsdetComponent } from './psdet/psdet.component';
import { ServpsService } from './servps.service';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from  '@angular/forms';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,SignupComponent,LoginComponent, FormComponent, ButtonComponent, ThumbnailComponent, TextboxComponent, TableComponent, SqrtPipe, RevstrPipe, NavComponent, PcgamesComponent, PsgamesComponent,  PsdetComponent, SearchComponent, AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
