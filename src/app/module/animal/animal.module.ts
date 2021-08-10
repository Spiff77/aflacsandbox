import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatComponent} from './components/cat/cat.component';
import {DogComponent} from './components/dog/dog.component';
import {AnimalComponent} from './components/animal/animal.component';
import {Route, RouterModule, Routes} from '@angular/router';

const routes: Routes =  [
      {path: '', component: AnimalComponent, children: [
        {path: 'dog', component: DogComponent},
        {path: 'cat', component: CatComponent},
        {path: '', redirectTo: 'animal/dog', pathMatch: 'full'}
    ]}];

@NgModule({
  declarations: [CatComponent, DogComponent, AnimalComponent],
  exports: [
    AnimalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AnimalModule { }
