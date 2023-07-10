import { NoteInterface } from "@/interfaces/note";

const URL = 'http://127.0.0.1:8000/api/notes';

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

export const getNoteService = async (id?: number) => {
    try {
        const request = await fetch(`${URL}/${id}`,);
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
};

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
