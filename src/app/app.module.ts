import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { MainPageComponent } from './dbz/pages/main-page.component';




@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
