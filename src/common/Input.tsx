import { FC } from 'react';
import { BiXCircle } from "react-icons/bi";
import { Field, FieldContent, InputElement, Legend, Label } from "@/styled/common/form";
import { InputPropsInterface } from '@/interfaces';

export const Input: FC<InputPropsInterface> = (props: InputPropsInterface) => {

    const { icon, legend, isValid, label, rounded } = props;

    return (
        <Field>
            { label && <Label>{label}</Label> }
            <FieldContent variant={icon ? 'icon' : ''}>
                <InputElement isrounded={rounded} variant={icon ? 'icon' : ''} {...props}/>
                { icon && icon }
            </FieldContent>
            { legend && 
            <Legend isvalid={isValid}>
                <BiXCircle/>
                { legend }
            </Legend> }
        </Field>
    );
};
