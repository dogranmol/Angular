import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SpecificComponent } from './specific/specific.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './user/auth.guard';

const appRoutes: Routes = [
  { path: '' , component:MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register' , component:RegisterComponent},
  { path: 'add' , component:FormComponent , canActivate:[AuthGuard]},
  { path: 'home' , component:HomeComponent, canActivate:[AuthGuard]},
  { path: 'edit/:id', component:EditFormComponent, canActivate:[AuthGuard]},
  { path: '**', redirectTo: '/', pathMatch: 'full'}


];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    SpecificComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    EditFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
