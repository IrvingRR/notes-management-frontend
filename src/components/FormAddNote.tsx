"use client";

import React, { useState, FC } from "react";
import { toast } from "react-hot-toast";
import { Input, TextArea, Button } from "@/common";
import { Form, FormActtions } from "@/styled/common/form.styles";
import { NoteInterface } from "@/interfaces/note";

interface FormAddProps {
  handleCreateNote: (data?: NoteInterface) => void
  handleCloseModal: () => void
}

export const FormAddNote: FC<FormAddProps> = (props: FormAddProps) => {

  const { handleCreateNote, handleCloseModal } = props;

  const initialValues = {
    title: '',
    description: ''
  };
  
  const [form, setForm] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement  | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.title && form.description) {
      handleCreateNote(form);
      e.target.reset();
    } else {
      toast.error('Please fill the form correctlly');
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create Note</h2>
      <Input type='text' name='title' placeholder="Title" variant='secondary' legend='Title invalid' onChange={handleChange}/>
      <TextArea name="description" placeholder="Description" variant="secondary" onChange={handleChange}/>
      <FormActtions>
        <Button label='Create'/>
        <Button label='Cancel' variant="third" type='button' onClick={handleCloseModal}/>
      </FormActtions>
    </Form> 
  );
};