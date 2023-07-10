"use client";

import { BiSearch } from "react-icons/bi";
import { Container} from "@/styled/pages/home.styles";
import { Button, Input, TextArea } from "@/common";

export default function Home() {

  return (
   <Container>
      <h2>Notes list</h2>
      <Input type='text' name='seach' placeholder='Search notes' icon={<BiSearch/>} legend='Invalid search'/>
      <TextArea name='description' placeholder="Description"/>
      <Button label='Create'/>
   </Container>
  );
};