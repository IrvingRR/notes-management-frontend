import { FC } from "react";
import { ButtonPropsInterface } from "@/interfaces/button";
import { ButtonElement } from "@/styled/common/button";

export const Button: FC<ButtonPropsInterface> = (props: ButtonPropsInterface) => {

    const { label, variant, icon } = props;

    return (
        <ButtonElement variant={variant} { ...props }>
            { icon && icon }
            { label }
        </ButtonElement>
    );
};