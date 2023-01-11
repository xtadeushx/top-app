import React, { FC } from 'react';
import { IHeaderProps } from './Header.props';

import styles from './Header.module.css';

const Header: FC<IHeaderProps> = ({ className, ...props }): JSX.Element => {
    return (
        <header {...props}>
            <h2>Header</h2>
        </header>
    );
};

export { Header };
