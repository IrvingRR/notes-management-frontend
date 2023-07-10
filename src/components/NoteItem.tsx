"use client";

import { useState, FC } from "react";
import { BiDotsVerticalRounded, BiNote } from "react-icons/bi";
import { NoteCard, NoteCardBody, NoteCardButton, NoteCardHeader, NoteCardOption, NoteCardOptions, NoteCardTitle } from "@/styled/components/noteItem.styles";
import { NoteInterface } from "@/interfaces/note";
import { Modal } from "@/common";
import { ConfirmComponent } from "./ConfirmComponent";
import { useModal } from "@/hooks";

interface NotePropsInterface {
  note: NoteInterface
  handleDeleteNote: (id?: number) => void
  handleSelectNoteToUpdate: (id?: number) => void
};

export const NoteItem: FC<NotePropsInterface> = (props: NotePropsInterface) => {

  const { note, handleDeleteNote, handleSelectNoteToUpdate } = props;

  const [showOptions, setShowOptions] = useState(false);
  const { isOpenedModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <NoteCard>
        <ConfirmComponent handleConfirm={() => handleDeleteNote(note.id)} showComponent={isOpenedModal} handleClose={handleCloseModal}/>
        <NoteCardHeader>
        <BiNote/>
        <NoteCardButton onClick={() => setShowOptions(!showOptions)}>
            <BiDotsVerticalRounded/>
            <NoteCardOptions show={showOptions}>
            <NoteCardOption onClick={() => handleSelectNoteToUpdate(note.id)}>Edit</NoteCardOption>
            <NoteCardOption onClick={handleOpenModal}>Delete</NoteCardOption>
            </NoteCardOptions>
        </NoteCardButton>
        </NoteCardHeader>
        <NoteCardTitle>
        <h3>{note.title}</h3>
        </NoteCardTitle>
        <NoteCardBody>
        <p>{note.description}</p>
        </NoteCardBody>
    </NoteCard>
  );
};