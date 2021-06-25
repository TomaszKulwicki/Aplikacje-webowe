import { Guid } from './guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {

    deleteNote(id: Guid): void {
        let notesValue = <string>sessionStorage.getItem('notes');
        
        let notes: Note[];
        notes = <Note[]>JSON.parse(notesValue);
        notes = notes.filter(note => note.id !== id); 

        sessionStorage.setItem('notes', JSON.stringify(notes)); 

    }
    
    public addNote(note: Note): void {
        let notesValue = <string>sessionStorage.getItem('notes');
        let notes = <Note[]>JSON.parse(notesValue);
        if(!notes) notes = [];
        notes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        let notesValue = <string>sessionStorage.getItem('notes');
        return <Note[]>JSON.parse(notesValue); 
    }
   
}