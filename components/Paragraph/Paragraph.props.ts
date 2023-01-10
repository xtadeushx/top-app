import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParagraphProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    children: ReactNode;
    size?: 'm' | 's' | 'lg';
}
