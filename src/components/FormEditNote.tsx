"use client";

import { FC, useState, useEffect } from 'react';
import { Input, TextArea, Button } from "@/common";
import { Form, FormActtions } from "@/styled/common/form.styles";
import { NoteInterface } from '@/interfaces/note';
import { getNoteService } from '@/services/notes';
import { toast } from 'react-hot-toast';

/**
 * This is a component created to handle the update of a note
 * @param {Function} handleUpdateNote: This function execute an async service to update the note information and save the updated information in the database
 * @param {Function} handleCloseModal: This function allows us to close the modal when the cancel button is clicked
 * @param {NoteInterface} noteSelecte: This property allows us to select the note which we want to update. This way we can get the information and render it in the form
 */

// Interface create to handle props of component
interface FormEditProps {
  noteSelected: NoteInterface,
  handleUpdateNote: (id?: number, data?: NoteInterface) => void,
  handleCloseModalEdit: () => void
};

export const FormEditNote: FC<FormEditProps> = (props: FormEditProps) => {

  const { noteSelected, handleUpdateNote, handleCloseModalEdit } = props;
  
  const [form, setForm] = useState({ title: '', description: '' });
  
  // Every time the state of the selected note changes, the following http request will be made
  useEffect(() => {
    const getNote = async () => {
      const response = await getNoteService(noteSelected.id);
      setForm(response.note);
    }
    
    if(noteSelected.id){
      getNote();
    }
  }, [noteSelected]);

  // This function allows to handle the state using the value of the every input in the form

  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement  | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

    // This function isi responsible for handle the submit event of the form. If the title and description are filled so the form will executed the handleUpdateNote function

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.title && form.description) {
      handleUpdateNote(noteSelected.id, form);
    } else {
      toast.error('Please fill the form correctlly');
    }
  }
  

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Edit Note</h3>
      <Input type='text' name='title' placeholder="Title" variant='secondary' value={form.title} onChange={handleChange}/>
      <TextArea name="description" placeholder="Description" variant="secondary" value={form.description} onChange={handleChange}/>
      <FormActtions>
        <Button label='Update'/>
        <Button label='Cancel' variant="third" type='button' onClick={handleCloseModalEdit}/>
      </FormActtions>
    </Form> 
  );
};