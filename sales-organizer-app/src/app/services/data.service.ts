import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getTasks(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');
    return collectionData(tasksRef, {idField: 'id'}) as Observable<Task[]>;
  }

  addTask(task: Task) {
    const tasksRef = collection(this.firestore, 'tasks');
    return addDoc(tasksRef, task);
  }
}

export interface Task {
  id?: string;
  title: string;
  text: string;
  teammember: string;
  customer: string;
}
