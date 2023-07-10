import { FC } from "react";
import { ButtonPropsInterface } from "@/interfaces/button";
import { ButtonElement } from "@/styled/common/button.styles";

export const Button: FC<ButtonPropsInterface> = (props: ButtonPropsInterface) => {

    const { label, variant, icon, rounded } = props;

    return (
        <ButtonElement isrounded={rounded} variant={variant} { ...props }>
            { icon && icon }
            { label }
        </ButtonElement>
    );
};