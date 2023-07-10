"use client";

import { BiSearch } from "react-icons/bi";
import { Container, NotesContainer, Header } from "@/styled/pages/home.styles";
import { Button, Input, Modal } from "@/common";
import { FormAddNote, FormEditNote, NoteItem } from "@/components";
import { useModal } from "@/hooks";

export default function Home() {

  const { isOpenedModal, handleOpenModal, handleCloseModal } = useModal();
  const { isOpenedModal: isOpenedModalEdit, handleOpenModal: handleOpenModalEdit, handleCloseModal: handleCloseModalEdit } = useModal();

  return (
   <Container>
      <Modal showModal={isOpenedModal} handleCloseModal={handleCloseModal}>
        <FormAddNote/>
      </Modal>
      <Modal showModal={isOpenedModalEdit} handleCloseModal={handleCloseModalEdit}>
        <FormEditNote/>
      </Modal>
      <h2>Notes list</h2>
      <p>Toal: 180 notes</p>
      <Header>
        <Button label='Create new' onClick={handleOpenModal}/>
      </Header>
      <Input type='text' name='search' placeholder='Search' icon={<BiSearch/>}/>
      <NotesContainer>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
        <NoteItem/>
      </NotesContainer>
   </Container>
  );
};