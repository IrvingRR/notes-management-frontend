"use client";
import { FC } from "react";
import { NotesContainer } from '@/styled/components/notes.styles';
import { NoteItem } from './NoteItem';
import { NoteInterface } from '@/interfaces/note';

/**
 * This component allows us to render every note from the database within a NoteItem component
 * @param {NoteInterface[]} notes: Is the list with all notes from database
 * @param {Function} handleDeleteNote: Is the function which will be passes to every NoteItem to delete a specific note
 * @param {Function} handleSeleecNoteToUpdate: Is the function which will be passes to every NoteItem to select the note which will be updated
 * @param {String} search: Is the property which allows us to filter all the note by title
 */

// Interface create to handle the props of the component
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
