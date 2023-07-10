"use client";

import { useState } from 'react';

export const useModal = (initialState: boolean = false) => {

    const [isOpenedModal, setIsOpenedModal] = useState(initialState);

    const handleOpenModal = () => setIsOpenedModal(true);

    const handleCloseModal = () => setIsOpenedModal(false);

    const handleToggleModal = () => setIsOpenedModal(!isOpenedModal);

    return {
        isOpenedModal,
        handleOpenModal,
        handleCloseModal,
        handleToggleModal
    };

};