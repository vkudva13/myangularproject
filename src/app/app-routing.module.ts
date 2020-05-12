import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PcgamesComponent } from './pcgames/pcgames.component';
import { PsgamesComponent } from './psgames/psgames.component';
import {RouterModule,Routes} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{path:"pcgames",component:PcgamesComponent},
{path:"psgames",component:PsgamesComponent},
{path:"search",component:SearchComponent},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:"about",component:AboutComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
