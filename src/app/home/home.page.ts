import { Component } from '@angular/core';
import { IonicModule, } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HomePage {
}
