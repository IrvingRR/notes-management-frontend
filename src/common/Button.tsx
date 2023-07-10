import { FC } from "react";
import { ButtonPropsInterface } from "@/interfaces/button";
import { ButtonElement } from "@/styled/common/button.styles";

/**
 * This is a reusable button component
 * @param {String} lable: Is the text wich will be rendered within button
 * @param {String} variant: This property allows us indicate the appearance of the component depending of the value [primary, secondary, outline, outline secondary, third]
 * @param {ElementJSX} icon: Is the icon which will be rendered within button component. Is optional
 * @param {Boolean} rounded: This property allows us indicate that the button component must to be rounded 
 * @returns 
 */

export const Button: FC<ButtonPropsInterface> = (props: ButtonPropsInterface) => {

    const { label, variant, icon, rounded } = props;

    return (
        <ButtonElement isrounded={rounded} variant={variant} { ...props }>
            { icon && icon }
            { label }
        </ButtonElement>
    );
};