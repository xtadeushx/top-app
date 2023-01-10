import React, { FC } from 'react';
import { ITagProps } from './Tag.props';

import cn from 'classnames';

import styles from './Tag.module.css';

const Tag: FC<ITagProps> = ({
    children,
    size,
    className,
    color,
    href,
    ...props
}): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.ghost]: color === 'ghost',
                [styles.primary]: color === 'primary',
                [styles.red]: color === 'red',
                [styles.green]: color === 'green',
            })}
            {...props}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};

export { Tag };
