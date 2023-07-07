import { Component } from '@angular/core';
import { IonicModule, } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-haptics',
  templateUrl: 'haptics.page.html',
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HapticsPage {
}
