import { BiX } from "react-icons/bi";
import { ModalButton, ModalHeader, ModalWrapper } from "@/styled/common/modal.styles";
import { ModalPropsInterface } from "@/interfaces/modal";
import { FC } from "react";

export const Modal: FC<ModalPropsInterface> = ({ children, ...props }: ModalPropsInterface) => {
  return (
    <ModalWrapper show={props.showModal}>
        <ModalHeader>
            <ModalButton onClick={props.handleCloseModal}>
                <BiX/>
            </ModalButton>
        </ModalHeader>
        { children }
    </ModalWrapper>
  );
};