import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private base ="http://localhost:8080"
  
  constructor(private httpCLient: HttpClient) { }

getanimallist() : Observable<Animal[]>
{
  return this.httpCLient.get<Animal[]>(`${this.base}/getanimal`);
}

createanimal(animals: Animal) : Observable<Object>
{
  return this.httpCLient.post(`${this.base}/animalpost`,animals);
}
getanimalbyid(id: number) :Observable<Animal>
{
  return this.httpCLient.get<Animal>(`${this.base}/getanimal/${id}`);
}
updateAnimal(animals:Animal):Observable<Animal>
{
  return this.httpCLient.put<Animal>(`${this.base}/put`,animals);
}
deleteAnimalbyId(id: number):Observable<Object>
{
  return this.httpCLient.delete<Object>(`${this.base}/delete/${id}`);

}
}
