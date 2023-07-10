import { FC } from 'react';
import { BiXCircle } from "react-icons/bi";
import { Field, FieldContent, TextAreaElement, Legend, Label } from "@/styled/common/form.styles";
import { TextAreaPropsInterface } from '@/interfaces';

/**
 * This is a reusable textarea component to implement within form or any component 
 * @param {String} legend: This property allows us to display a help legend to indicate when the use introduce a wrong value
 * @param {Boolean} isValid: This propery allows us to indicate if the input is valid or not depending of the value. The property enable and display the legend element
 * @param {String} label: This property allowd to display a tex within a label tag
 * @param {Boolean} rounded: This property allows us to indicate if the input is rounded
 * @param {String} variant: This property allows us to change the appearance of the input depending of the value [default]
 */

export const TextArea: FC<TextAreaPropsInterface> = (props: TextAreaPropsInterface) => {

    const { legend, isValid, label, rounded, variant } = props;

    return (
        <Field>
            { label && <Label>{label}</Label> }
            <FieldContent>
                {/* <TextAreaElement {...props}/> */}
                <TextAreaElement variant={variant} isrounded={rounded} {...props}/>
            </FieldContent>
            { legend && 
            <Legend isvalid={isValid}>
                <BiXCircle/>
                { legend }
            </Legend> }
        </Field>
    );
};
