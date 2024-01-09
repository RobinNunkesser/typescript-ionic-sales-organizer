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

  getCustomers(): Observable<Customer[]> {
    const tasksRef = collection(this.firestore, 'customers');
    return collectionData(tasksRef, {idField: 'id'}) as Observable<Customer[]>;
  }

  getTeamMembers(): Observable<TeamMember[]> {
    const tasksRef = collection(this.firestore, 'teammembers');
    return collectionData(tasksRef, {idField: 'id'}) as Observable<TeamMember[]>;
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

export interface Customer {
  id?: string;
  name: string;
}

export interface TeamMember {
  id?: string;
  name: string;
}
