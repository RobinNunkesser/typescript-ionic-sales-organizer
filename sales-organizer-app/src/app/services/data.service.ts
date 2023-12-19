import { Injectable } from '@angular/core';
import {Firestore, collectionData} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  db : Firestore;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.db = getFirestore(app);
   }

  getTasks(): Observable<Task[]> {
    const tasksRef = collection(this.db, 'tasks');
    return collectionData(tasksRef, {idField: 'id'}) as Observable<Task[]>;
  }
}

export interface Task {
  id?: string;
  title: string;
  text: string;
  teammember: string;
  customer: string;
}
