"use client";

import { FC, useState, useEffect } from 'react';
import { Input, TextArea, Button } from "@/common";
import { Form, FormActtions } from "@/styled/common/form.styles";
import { NoteInterface } from '@/interfaces/note';
import { getNoteService } from '@/services/notes';
import { toast } from 'react-hot-toast';

interface FormEditProps {
  noteSelected: NoteInterface,
  handleUpdateNote: (id?: number, data?: NoteInterface) => void,
  handleCloseModalEdit: () => void
};

export const FormEditNote: FC<FormEditProps> = (props: FormEditProps) => {

  const { noteSelected, handleUpdateNote, handleCloseModalEdit } = props;
  
  const [form, setForm] = useState({ title: '', description: '' });
  
  useEffect(() => {
    const getNote = async () => {
      const response = await getNoteService(noteSelected.id);
      setForm(response.note);
    }
    
    if(noteSelected.id){
      getNote();
    }
  }, [noteSelected]);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement | HTMLInputElement  | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

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
      <h2>Edit Note</h2>
      <Input type='text' name='title' placeholder="Title" variant='secondary' value={form.title} onChange={handleChange}/>
      <TextArea name="description" placeholder="Description" variant="secondary" value={form.description} onChange={handleChange}/>
      <FormActtions>
        <Button label='Update'/>
        <Button label='Cancel' variant="third" type='button' onClick={handleCloseModalEdit}/>
      </FormActtions>
    </Form> 
  );
};