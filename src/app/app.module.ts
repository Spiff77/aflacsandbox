import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainParentComponent } from './components/main-parent/main-parent.component';
import { SecondaryParentComponent } from './components/secondary-parent/secondary-parent.component';
import { ChildrenComponent } from './components/children/children.component';
import { PersonNameComponent } from './components/person-name/person-name.component';
import { ColorizeDirective } from './colorize.directive';
import { BComponent } from './components/b/b.component';
import { AComponent } from './components/a/a.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DialogAddItemComponent } from './components/dialog-add-item/dialog-add-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {JwtInterceptor} from './jwt.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'animal', loadChildren: () => import('./module/animal/animal.module').then( m => m.AnimalModule)},
  {path: 'fruit', loadChildren: () => import('./module/fruit/fruit.module').then( m => m.FruitModule)},

];

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    SecondaryParentComponent,
    ChildrenComponent,
    PersonNameComponent,
    ColorizeDirective,
    BComponent,
    AComponent,
    HomeComponent,
    DialogAddItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
