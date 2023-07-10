import { FC } from 'react';
import { Button } from '@/common';
import { CardConfirm, CardConfirmOptions, ConfirmComponentWrapper } from '@/styled/components/confirmComponent.styles';

/**
 * This is a reusable component to display a confirm modal to execute an action or cancel it
 * @param {Boolean} showComponent: This proeprty allows us indicate if the component must be displayed
 * @param {Function} handleClose: This function allows us to close the component whe the action is cancelled
 * @param {Function} handleConfirm: This function allows us to execute the action pending when the confirm button is clicked
 */

// Interface create to handle props of component
interface ConfirmComponentProps {
    showComponent: boolean,
    handleClose: () => void
    handleConfirm: () => void
};

export const ConfirmComponent:FC<ConfirmComponentProps> = (props: ConfirmComponentProps) => {
  
    const { showComponent, handleClose, handleConfirm } = props;
  
    return (
    <ConfirmComponentWrapper show={showComponent}>
        <CardConfirm>
            <h2>Are you sure?</h2>
            <small>The note will be deleted from database permanently.</small>
            <CardConfirmOptions>
                <Button label='Confirm' onClick={handleConfirm}/>
                <Button label='Cancel' onClick={handleClose} variant='third'/>
            </CardConfirmOptions>
        </CardConfirm>
    </ConfirmComponentWrapper>
  )
}
