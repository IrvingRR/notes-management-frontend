import { ChangeEvent, FC } from 'react';
import { BiXCircle } from "react-icons/bi";
import { Field, FieldContent, InputElement, Legend } from "@/styled/common/form";

interface InputProps {
    type?: 'text' | 'number' | 'email' | 'password' | 'date'
    label?: string
    value?: string | number
    name: string
    placeholder?: string
    disabled?: boolean
    icon?: JSX.Element
    legend?: string
    isValid?: boolean
    required?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
};

export const Input: FC<InputProps> = (props: InputProps) => {

    const { icon, legend, isValid } = props;

    return (
        <Field>
            <FieldContent variant={icon ? 'icon' : ''}>
                <InputElement variant={icon ? 'icon' : ''} {...props}/>
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
