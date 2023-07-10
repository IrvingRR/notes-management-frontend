import { ChangeEvent } from 'react';

export interface InputPropsInterface {
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
    rounded?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
};