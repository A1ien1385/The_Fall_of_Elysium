import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureComponent } from "./picture/picture.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'the_fall_of_elysium';


  
}
