import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from  './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes =[
{ path: 'about', component: AboutComponent},
{ path: 'career', component: CareersComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'service', component: ServicesComponent }
];

@NgModule({
imports : [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule{ }