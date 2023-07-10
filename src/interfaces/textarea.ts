import { ChangeEvent } from 'react';

export interface TextAreaPropsInterface {
    label?: string
    value?: string
    name: string
    placeholder?: string
    disabled?: boolean
    legend?: string
    isValid?: boolean
    required?: boolean
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
};