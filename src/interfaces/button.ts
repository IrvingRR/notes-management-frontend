// Interface create to handle the props of the Button component
export interface ButtonPropsInterface {
    type?: 'submit' | 'button' | 'reset'
    label: string
    disabled?: boolean
    icon?: JSX.Element
    variant?: string
    rounded?: boolean
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
};