"use client";

/** This hook is created to handle the state of every Modal component integrate in the application */

import { useState } from 'react';

export const useModal = (initialState: boolean = false) => {

    const [isOpenedModal, setIsOpenedModal] = useState(initialState);

    // This function allows to change the value to true to open the Modal component
    const handleOpenModal = () => setIsOpenedModal(true);
    
    // This function allows to change the value to false to close the Modal component
    const handleCloseModal = () => setIsOpenedModal(false);
    
    // This function allows to change the value to the inverse of the currrent value
    const handleToggleModal = () => setIsOpenedModal(!isOpenedModal);

    return {
        isOpenedModal,
        handleOpenModal,
        handleCloseModal,
        handleToggleModal
    };

};