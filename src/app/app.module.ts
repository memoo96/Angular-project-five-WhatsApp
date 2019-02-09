import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { CallsComponent } from './calls/calls.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatsComponent } from './chats/chats.component';
import { HeaderComponent } from './header/header.component';
import { TypeStatusComponent } from './type-status/type-status.component';


export const router: Routes = [
  { path: '', redirectTo: '/Chats', pathMatch: 'full'},
  { path: 'Chats', component: ChatsComponent },
  { path: 'Status', component: StatusComponent },
  { path: 'Calls', component: CallsComponent },
  { path: 'Contacts', component: ContactsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    CallsComponent,
    ContactsComponent,
    ChatsComponent,
    HeaderComponent,
    TypeStatusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
