import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../components/home/home.component';
import {FruitComponent} from './components/fruit/fruit.component';
import {AppleComponent} from './components/apple/apple.component';


const routes: Routes = [
  {path: 'fruit', component: FruitComponent, children: [
      {path: 'apple', component: AppleComponent},
    ]},
];
@NgModule({
  declarations: [FruitComponent, AppleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FruitModule { }
