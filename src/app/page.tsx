"use client";

import { BiSearch } from "react-icons/bi";
import { Container, Header } from "@/styled/pages/home.styles";
import { Button, Input, Loader, Modal } from "@/common";
import { FormAddNote, FormEditNote, Notes } from "@/components";
import { useModal } from "@/hooks";

export default function Home() {

  const { isOpenedModal, handleOpenModal, handleCloseModal } = useModal();
  const { isOpenedModal: isOpenedModalEdit, handleOpenModal: handleOpenModalEdit, handleCloseModal: handleCloseModalEdit } = useModal();

  return (
   <Container>
      <Loader/>
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
      <Notes/>
   </Container>
  );
};