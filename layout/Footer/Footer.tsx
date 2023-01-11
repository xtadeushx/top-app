import React, { FC } from 'react';
import { IFooterProps } from './Footer.props';

import styles from './Footer.module.css';

const Footer: FC<IFooterProps> = ({ className, ...props }): JSX.Element => {
    return (
        <footer {...props}>
            <h2>Footer</h2>{' '}
        </footer>
    );
};

export { Footer };
