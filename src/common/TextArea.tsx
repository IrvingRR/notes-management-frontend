import { FC } from 'react';
import { BiXCircle } from "react-icons/bi";
import { Field, FieldContent, TextAreaElement, Legend, Label } from "@/styled/common/form";
import { TextAreaPropsInterface } from '@/interfaces';

export const TextArea: FC<TextAreaPropsInterface> = (props: TextAreaPropsInterface) => {

    const { legend, isValid, label } = props;

    return (
        <Field>
            { label && <Label>{label}</Label> }
            <FieldContent>
                {/* <TextAreaElement {...props}/> */}
                <TextAreaElement {...props}/>
            </FieldContent>
            { legend && 
            <Legend isvalid={isValid}>
                <BiXCircle/>
                { legend }
            </Legend> }
        </Field>
    );
};
