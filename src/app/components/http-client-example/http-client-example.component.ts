import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit{
 jokesService = inject(JokesService);

 dadJoke: string = '';
 chuckNorrisJoke: string = '';


 ngOnInit(): void{
    // this.jokesService.getDadJokes().subscribe((data) => {
    //   console.log("Dad Joke: ", data.joke);
    //   this.dadJoke = data.joke;
    // });
    // this.jokesService.getChuckNorris().subscribe((data) => {
    //   console.log("Chuck Norris: ", data.value);
    // });
    this.refreshDadJoke();
    this.refreshchuckNorrisJoke();
 }

 refreshDadJoke(){
  this.jokesService.getDadJokes()
    .subscribe((data)=> {
      console.log(data)
      this.dadJoke = data.joke;
    })
 }

 refreshchuckNorrisJoke(){
  this.jokesService.getChuckNorris()
   .subscribe((data)=> {
    this.chuckNorrisJoke = data.value;
   })
 }
}
