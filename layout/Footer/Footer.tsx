import React, { FC } from 'react';
import { IFooterProps } from './Footer.props';

import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

const Footer: FC<IFooterProps> = ({ className, ...props }): JSX.Element => {
    return (
        <footer
            className={cn(className, styles.footer)}
            {...props}
        >
            <p className={styles.text}>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </p>

            <a
                href='#'
                target={'_blank'}
                className={styles.link}
            >
                Пользовательское соглашение
            </a>
            <a
                href='#'
                target={'_blank'}
                className={styles.link}
            >
                Политика конфиденциальности
            </a>
        </footer>
    );
};

export { Footer };
