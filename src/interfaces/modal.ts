// Interface create to handle the props of the Modal component

export interface ModalPropsInterface {
    children: React.ReactNode
    showModal: boolean
    handleCloseModal?: () => void
};