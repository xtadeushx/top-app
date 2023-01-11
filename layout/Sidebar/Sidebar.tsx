import React, { FC } from 'react';
import { ISidebarProps } from './Sidebar.props';

import styles from './Sidebar.module.css';

const Sidebar: FC<ISidebarProps> = ({ className, ...props }): JSX.Element => {
    return (
        <div {...props}>
            <h2>Sidebar</h2>{' '}
        </div>
    );
};

export { Sidebar };
