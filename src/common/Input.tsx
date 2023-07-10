import { FC } from 'react';
import { BiXCircle } from "react-icons/bi";
import { Field, FieldContent, InputElement, Legend, Label } from "@/styled/common/form.styles";
import { InputPropsInterface } from '@/interfaces';

/**
 * This is a reusable input component to implement within form or any component 
 * @param {ElementJSX} icon: Is the icon will be displayed within the input left side text
 * @param {String} legend: This property allows us to display a help legend to indicate when the use introduce a wrong value
 * @param {Boolean} isValid: This propery allows us to indicate if the input is valid or not depending of the value. The property enable and display the legend element
 * @param {String} label: This property allowd to display a tex within a label tag
 * @param {Boolean} rounded: This property allows us to indicate if the input is rounded
 * @param {String} variant: This property allows us to change the appearance of the input depending of the value [default, icon]
 */

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
