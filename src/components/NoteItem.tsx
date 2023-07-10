import { useState } from "react";
import { BiDotsVerticalRounded, BiNote } from "react-icons/bi";
import { NoteCard, NoteCardBody, NoteCardButton, NoteCardHeader, NoteCardOption, NoteCardOptions, NoteCardTitle } from "@/styled/components/noteItem.styles";

export const NoteItem = () => {

  const [showOptions, setShowOptions] = useState(false);

  return (
    <NoteCard>
        <NoteCardHeader>
        <BiNote/>
        <NoteCardButton onClick={() => setShowOptions(!showOptions)}>
            <BiDotsVerticalRounded/>
            <NoteCardOptions show={showOptions}>
            <NoteCardOption>Edit</NoteCardOption>
            <NoteCardOption>Delete</NoteCardOption>
            </NoteCardOptions>
        </NoteCardButton>
        </NoteCardHeader>
        <NoteCardTitle>
        <h3>My first Note</h3>
        <span>2023-07-10</span>
        </NoteCardTitle>
        <NoteCardBody>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat pariatur iure expedita quod, odio consequuntur. Consequuntur exercitationem tenetur officia?</p>
        </NoteCardBody>
    </NoteCard>
  );
};