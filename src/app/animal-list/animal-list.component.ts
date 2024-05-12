import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss'
})
export class AnimalListComponent implements OnInit{

animals?: Animal[]

constructor(private animalService: AnimalService,private router:Router) { }

ngOnInit(): void {
  
  
this.getanimals()


//   this.animals=[{
//     "id":1,
//     "name":"aa",
//     "age":3,
//     "breed":"dull"
//   },
// {
//   "id":2,
//     "name":"bb",
//     "age":4,
//     "breed":"dukk"
// }]
}

getanimals()
{
  
this.animalService.getanimallist().subscribe(data=>{
  console.log(data)
  this.animals=data;
 
})
}

updateAnimal(id: number)
{
  console.log("here")
  this.router.navigate(['update-animals',id]);
}
deleteAnimal(id: number)
{
  console.log("inside Component")
  this.animalService.deleteAnimalbyId(id).subscribe(data=>{console.log(data)   
    this.getanimals();
  },
error=>console.log(error));
}


}
