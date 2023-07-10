import { ChangeEvent } from 'react';

// Interface create to handle the props of the TextArea component

export interface TextAreaPropsInterface {
    label?: string
    value?: string
    name: string
    placeholder?: string
    disabled?: boolean
    legend?: string
    isValid?: boolean | null
    required?: boolean
    rounded?: boolean
    variant?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
};