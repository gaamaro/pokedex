import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RollOnScrollDirective } from './directives/roll-on-scroll.directive';
import { PokenumberPipe } from './pipes/pokenumber.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    RollOnScrollDirective,
    PokenumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
