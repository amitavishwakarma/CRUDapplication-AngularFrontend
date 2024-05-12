import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-create-animal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-animal.component.html',
  styleUrl: './create-animal.component.scss'
})
export class CreateAnimalComponent implements OnInit{
   
  
  animals : Animal = new Animal();
  constructor(private animalService:AnimalService,
    private router:Router
  ) {}

  ngOnInit(): void {
  }

  saveAnimal()
  {
    this.animalService.createanimal(this.animals).subscribe(data =>{console.log(data);},
  error => console.log(error));
  this.gotoAnimalList();
}
gotoAnimalList()
  {
this.router.navigate(['/animals']);

  }


  onSubmit(){
    console.log(this.animals);
    this.saveAnimal();
  }
}
