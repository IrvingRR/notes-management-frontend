"use client";

import { BiSearch } from "react-icons/bi";
import { Container, NotesContainer } from "@/styled/pages/home.styles";
import { Input } from "@/common";
import { NoteItem } from "@/components";

export default function Home() {

  return (
   <Container>
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