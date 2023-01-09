import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
    children,
    appearance = 'primary',
    className,
    ...props
}): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    );
};

export { Button };
