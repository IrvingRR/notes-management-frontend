import { BiX } from "react-icons/bi";
import { ModalButton, ModalHeader, ModalWrapper } from "@/styled/common/modal.styles";
import { ModalPropsInterface } from "@/interfaces/modal";
import { FC } from "react";

/**
 * This is a reusable Modal component to use and any part of the code
 * @param {React.Node} children: Is the content which will be rendered within of the modal componente
 * @param {Boolean} showModal: This property allows us to display the modal component depending of the value [true: display: false: hidden]
 * @param {Function} handleCloseModal: This function allows us to close the modal
 */

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