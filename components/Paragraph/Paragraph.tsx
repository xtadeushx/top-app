import React, { FC } from 'react';
import { IParagraphProps } from './Paragraph.props';

import cn from 'classnames';

import styles from './Paragraph.module.css';

const Paragraph: FC<IParagraphProps> = ({
    size = 'm',
    children,
    className,
    ...props
}): JSX.Element => {
    return (
        <p
            className={cn(styles.p, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.lg]: size === 'lg',
            })}
            {...props}
        >
            {children}
        </p>
    );
};

export { Paragraph };
