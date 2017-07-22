import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';


import { ExampleDef } from './example.model';


// Master list

export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
]


//Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
