import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, } from '@ionic/angular';

@Component({
  selector: 'app-keyboard',
  templateUrl: 'keyboard.page.html',
  standalone: true,
  imports: [IonicModule, NgFor],
})
export class KeyboardPage {
  items: any[] = new Array(100);

}
