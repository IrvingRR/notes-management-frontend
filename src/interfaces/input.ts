import { ChangeEvent } from 'react';

// Interface create to handle the props of the Input component
export interface InputPropsInterface {
    type?: 'text' | 'number' | 'email' | 'password' | 'date'
    label?: string
    value?: string | number
    name: string
    placeholder?: string
    disabled?: boolean
    icon?: JSX.Element
    legend?: string
    isValid?: boolean | null
    required?: boolean
    rounded?: boolean
    variant?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
};