import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonButton,IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,IonButton,IonBackButton],
})
export class DetailsPage implements OnInit {  

  task = null;
   
  constructor(private activatedRoute : ActivatedRoute) {}

  ngOnInit() {    
    console.log(this.activatedRoute);
    //this.task = this.activatedRoute.snapshot.params;
  }
}
