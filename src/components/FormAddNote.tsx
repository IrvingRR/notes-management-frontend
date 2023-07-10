"use client";

import React, { useState, FC } from "react";
import { toast } from "react-hot-toast";
import { Input, TextArea, Button } from "@/common";
import { Form, FormActtions } from "@/styled/common/form.styles";
import { NoteInterface } from "@/interfaces/note";

/**
 * This is a component created to handle the creation of a new note
 * @param {Function} handleCreateNote: When this function is called, execute a http request to create a new note and save it in the database
 * @param {Function} handleCloseModal: This function allows us to close the modal when the cancel button is clicked
 */

// Interface create to handle props of component
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

  // This function allows to handle the state using the value of the every input in the form
  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement  | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // This function isi responsible for handle the submit event of the form. If the title and description are filled so the form will executed the handleCreateNote function
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
      <h3>Create Note</h3>
      <Input type='text' name='title' placeholder="Title" variant='secondary' legend='Title invalid' onChange={handleChange}/>
      <TextArea name="description" placeholder="Description" variant="secondary" onChange={handleChange}/>
      <FormActtions>
        <Button label='Create'/>
        <Button label='Cancel' variant="third" type='button' onClick={handleCloseModal}/>
      </FormActtions>
    </Form> 
  );
};