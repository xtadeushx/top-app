import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'grey' | 'primary' | 'green';
    href?: string;
}
