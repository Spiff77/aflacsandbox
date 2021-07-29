import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MainParentComponent } from './components/main-parent/main-parent.component';
import { SecondaryParentComponent } from './components/secondary-parent/secondary-parent.component';
import { ChildrenComponent } from './components/children/children.component';
import { PersonNameComponent } from './components/person-name/person-name.component';
import { ColorizeDirective } from './colorize.directive';
import { BComponent } from './components/b/b.component';
import { AComponent } from './components/a/a.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    SecondaryParentComponent,
    ChildrenComponent,
    PersonNameComponent,
    ColorizeDirective,
    BComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
