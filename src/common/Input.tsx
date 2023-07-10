import { FC } from 'react';
import { BiXCircle } from "react-icons/bi";
import { Field, FieldContent, InputElement, Legend, Label } from "@/styled/common/form.styles";
import { InputPropsInterface } from '@/interfaces';

export const Input: FC<InputPropsInterface> = (props: InputPropsInterface) => {

    const { icon, legend, isValid, label, rounded, variant } = props;

    return (
        <Field>
            { label && <Label>{label}</Label> }
            <FieldContent variant={icon ? 'icon' : variant}>
                <InputElement isrounded={rounded} variant={icon ? 'icon' : ''} {...props}/>
                { icon && icon }
            </FieldContent>
            { legend &&
            <Legend isvalid={isValid?.toString()}>
                <BiXCircle/>
                { legend }
            </Legend> }
        </Field>
    );
};
