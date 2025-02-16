import { Link } from '@remix-run/react';
import classNames from 'classnames';
import { useState } from 'react';
import { NavigationMenu } from '../navigation-menu/navigation-menu';
import { SidebarNavigationMenu } from '../sidebar-navigation-menu/sidebar-navigation-menu';

import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className={classNames(styles.root, className)}>

            <section className={styles.navigation}>
                <Link to="/" className={styles.logo}>
                    <img src="/q4l.svg" alt="" className={styles.img1} />
                </Link>
                <NavigationMenu className={styles.menu} />
            </section>

            <SidebarNavigationMenu open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    );
};
