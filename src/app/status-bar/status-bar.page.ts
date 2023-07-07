import { Component, OnInit } from '@angular/core';
import { IonicModule, } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-status-bar',
  templateUrl: 'status-bar.page.html',
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class StatusBarPage implements OnInit {

  presentingElement: HTMLElement | null = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('ion-router-outlet');
  }
}
