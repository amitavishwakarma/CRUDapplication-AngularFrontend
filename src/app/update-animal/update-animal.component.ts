import { Component } from '@angular/core';
import { Animal } from '../animal';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../animal.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-animal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-animal.component.html',
  styleUrl: './update-animal.component.scss'
})
export class UpdateAnimalComponent {

  id?:any
constructor(private animalService:AnimalService,private activatedrouts:ActivatedRoute,
  private router: Router
){}

  animals:Animal=new Animal()
  ngOnInit(): void { this.id=this.activatedrouts.snapshot.params['id'];
    this.animalService.getanimalbyid(this.id).subscribe(data=> {
      console.log(data);
      this.animals=data;
      },
    error=>console.log(error));
  }


  onSubmit(){
   // console.log(this.animals);
this.animalService.updateAnimal(this.animals).subscribe(data=>{console.log(data);
  this.router.navigate(['/animals']);
}
,error=>console.log(error));

}
}