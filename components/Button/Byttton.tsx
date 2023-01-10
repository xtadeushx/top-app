import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';

import Image from 'next/image';
const Button: FC<ButtonProps> = ({
    children,
    appearance = 'primary',
    className,
    arrow = 'none',
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
            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                    })}
                >
                    {/* <Image
                        alt='arrow'
                        src={ArrowIcon}
                        width={10}
                        height={10}
                    /> */}
                    <ArrowIcon className/>
                </span>
            )}
        </button>
    );
};

export { Button };
