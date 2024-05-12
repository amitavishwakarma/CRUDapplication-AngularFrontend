import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAnimalComponent } from './create-animal/create-animal.component';
import { FormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, AnimalListComponent,HttpClientModule,CreateAnimalComponent,FormsModule,UpdateAnimalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DIFFERENT BREEDS OF DOG';
}
