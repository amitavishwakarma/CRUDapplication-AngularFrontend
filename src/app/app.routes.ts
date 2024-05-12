// import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component'
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';


export const routes: Routes = [
    {path: 'animals' , component:AnimalListComponent},
    {path: 'create-animals', component: CreateAnimalComponent },
    {path: 'update-animals/:id', component: UpdateAnimalComponent},
    {path:'', redirectTo:'animals', pathMatch: 'full'}
];


