"use client";
import { FC } from "react";
import { NotesContainer } from '@/styled/components/notes.styles';
import { NoteItem } from './NoteItem';
import { NoteInterface } from '@/interfaces/note';

interface NotesPropsInterface {
  notes: NoteInterface[]
  handleDeleteNote: (id?: number) => void
  handleSelectNoteToUpdate: (id?: number) => void,
  search: string
};

export const Notes: FC<NotesPropsInterface> = (props: NotesPropsInterface) => {

  const { notes, handleDeleteNote, handleSelectNoteToUpdate, search } = props;

  return (
    <NotesContainer>
        { notes.length > 0 
          ? notes.map(note => {
            if(note.title.toLowerCase().startsWith(search.toLowerCase())) {
              return <NoteItem key={note.id} note={note} handleDeleteNote={handleDeleteNote} handleSelectNoteToUpdate={handleSelectNoteToUpdate}/>
            } 
          })
          : <p>No notes</p>
        }
    </NotesContainer>
  );
};
