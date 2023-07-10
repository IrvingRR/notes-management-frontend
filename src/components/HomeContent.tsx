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

interface HomeComponentProps {
  data: NoteInterface[]
}

export const HomeContent: FC<HomeComponentProps> = ({ data }: HomeComponentProps) => {

  const { isOpenedModal, handleOpenModal, handleCloseModal } = useModal();
  const { isOpenedModal: isOpenedModalEdit, handleOpenModal: handleOpenModalEdit, handleCloseModal: handleCloseModalEdit } = useModal();
  
  const [notes, setNotes] = useState(data);
  const [search, setSearch] = useState('');
  const [noteSelected, setNoteSelected] = useState<NoteInterface>({title: '', description: ''});

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
      <p>Toal: {notes.length} notes</p>
      <Header>
        <Button label='Create new' onClick={handleOpenModal}/>
      </Header>
      <Input type='text' name='search' placeholder='Search' icon={<BiSearch/>} onChange={(e) => setSearch(e.target.value)}/>
      <Notes notes={notes} handleDeleteNote={handleDeleteNote} handleSelectNoteToUpdate={handleSelectNoteToUpdate} search={search}/>
   </Container>
  )
}
