"use client";

import toast from 'react-hot-toast';
import { FC, useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { Button, Input, Modal } from '@/common'
import { FormAddNote } from './FormAddNote'
import { FormEditNote } from './FormEditNote'
import { useModal } from '@/hooks';
import { Notes } from './Notes';
import { Container, Header } from '@/styled/pages/home.styles';
import { NoteInterface } from "@/interfaces/note";
import { createNoteService, deleteNoteService, getNoteService, updateNoteService } from '@/services/notes';

/**
 * This component allows us to render all the content of the Homepage to avoid have problems with the use of the state
 * @param {NoteInterface[]} data: Is the array with all the notes obtained in the home page
 */

// Interface create to handle the props of the component
interface HomeComponentProps {
  data: NoteInterface[]
}

export const HomeContent: FC<HomeComponentProps> = ({ data }: HomeComponentProps) => {

  const { isOpenedModal, handleOpenModal, handleCloseModal } = useModal();
  const { isOpenedModal: isOpenedModalEdit, handleOpenModal: handleOpenModalEdit, handleCloseModal: handleCloseModalEdit } = useModal();
  
  const [notes, setNotes] = useState(data);
  const [search, setSearch] = useState('');
  const [noteSelected, setNoteSelected] = useState<NoteInterface>({title: '', description: ''});


  // This function allows us to execute the http request to delete a specific note by id
  const handleDeleteNote = async (id?: number) => {
    const response = await deleteNoteService(id);
    console.log('Response delete', response);

    if(response.ok) {

      toast.success(response.message);
      setNotes(notes.filter(note => note.id !== id));

    } else {
      toast.error(response.message);
    }
  };

  // This function allows us to execute the http request to create a new note
  const handleCreateNote = async (data?: NoteInterface) => {
    const response = await createNoteService(data);
    console.log('Response delete', response);


    if(response.ok) {

      toast.success(response.message);
      handleCloseModal();
      setNotes([
        ...notes,
        response.note
      ]);

    } else {
      toast.error(response.message);
    }
  };

  // This function allows us to execute the http request to update a specific note by id
  const handleUpdateNote = async (id?: number, data?: NoteInterface) => {

    const response = await updateNoteService(id, data);

    if(response.ok) {

      toast.success(response.message);
      handleCloseModalEdit();
    
      setNotes(notes.map(note => {
        if(note.id === id) {
          return response.note
        } else {
          return note;
        }
      }));

    } else {
      toast.error(response.message);
    }
  }

  // This function allows us to execute the http request to get a specific note by id
  const handleSelectNoteToUpdate = async (id?: number) => {
    const response = await getNoteService(id);
    if(response.ok) {
      setNoteSelected(response.note);
      handleOpenModalEdit();
    } else {
      toast.error(response.message);
    }
  }

  return (
    <Container>
      <Modal showModal={isOpenedModal} handleCloseModal={handleCloseModal}>
            <FormAddNote handleCreateNote={handleCreateNote} handleCloseModal={handleCloseModal}/>
        </Modal>
        <Modal showModal={isOpenedModalEdit} handleCloseModal={handleCloseModalEdit}>
            <FormEditNote noteSelected={noteSelected} handleUpdateNote={handleUpdateNote} handleCloseModalEdit={handleCloseModalEdit}/>
        </Modal>
      <h2>Notes list</h2>
      <p>Total: {notes.length} notes</p>
      <Header>
        <Button label='Create new' onClick={handleOpenModal}/>
      </Header>
      <Input type='text' name='search' placeholder='Search' icon={<BiSearch/>} onChange={(e) => setSearch(e.target.value)}/>
      <Notes notes={notes} handleDeleteNote={handleDeleteNote} handleSelectNoteToUpdate={handleSelectNoteToUpdate} search={search}/>
   </Container>
  )
}
