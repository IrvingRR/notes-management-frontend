import { NoteInterface } from "@/interfaces/note";

// This file content all functions to do http requests to the database and handle the information about the notes

const URL = 'http://127.0.0.1:8000/api/notes';

// This function allows us to get all notes from database
export const getNotesService = async () => {
    try {
        const request = await fetch(URL, {
            cache: 'no-store'
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};

// This function allows us to get only one note by id
export const getNoteService = async (id?: number) => {
    try {
        const request = await fetch(`${URL}/${id}`,);
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};

// This function allows us to delete a note by id
export const deleteNoteService = async (id?: number) => {
    try {
        const request = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};

// This function allows us to create a new note
export const createNoteService = async (data?: NoteInterface) => {
    try {
        
        const request = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }
};

// This function allows us to update a specific note
export const updateNoteService = async (id?: number, data?: NoteInterface) => {
    try {
        
        const request = await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }
}
