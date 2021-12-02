import { Injectable } from '@angular/core';
import { Company, Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  setDoc,
  deleteDoc,
  docSnapshots,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getContacts(): Observable<Company[]> {
    const contactsCollection = collection(this.firestore, 'companys');
    // this method returns a stream of documents mapped to their payload and id
    return collectionData(contactsCollection, { idField: 'id' }).pipe(
      map((companys) => companys as Company[])
    );
  }

  getContactById(id: string): Observable<Company> {
    const document = doc(this.firestore, `companys/${id}`);
    return docSnapshots(document).pipe(
      map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return { id, ...data } as Company;
      })
    );
  }

  createContact(contact: Company): Promise<void> {
    const document = doc(collection(this.firestore, 'companys'));
    return setDoc(document, contact);
  }

  updateContact(contact: Contact): Promise<void> {
    const document = doc(this.firestore, 'contacts', contact?.id);
    const { id, ...data } = contact; // we don't want to save the id inside the document
    return setDoc(document, data);
  }

  deleteContact(id: string): Promise<void> {
    const document = doc(this.firestore, 'contacts', id);
    return deleteDoc(document);
  }
}
