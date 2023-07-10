"use client";

import { BiSearch } from "react-icons/bi";
import { Container, NotesContainer } from "@/styled/pages/home.styles";
import { Input, Modal } from "@/common";
import { NoteItem } from "@/components";
import { useModal } from "@/hooks";

export default function Home() {

  const { isOpenedModal, handleOpenModal, handleCloseModal } = useModal();

  return (
   <Container>
      <Modal showModal={isOpenedModal} handleCloseModal={handleCloseModal}>
        <h2>Modal content</h2>
      </Modal>
      <h2>Notes list</h2>
      <p>Toal: 180 notes</p>
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