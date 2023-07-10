import { FC } from 'react';
import { Button } from '@/common';
import { CardConfirm, CardConfirmOptions, ConfirmComponentWrapper } from '@/styled/components/confirmComponent.styles';

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
