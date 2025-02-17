import { Link } from '@remix-run/react';
import classNames from 'classnames';
import { useState } from 'react';
import { NavigationMenu } from '../navigation-menu/navigation-menu';
import { SidebarNavigationMenu } from '../sidebar-navigation-menu/sidebar-navigation-menu';

import styles from './header.module.scss';
import { RxHamburgerMenu } from "react-icons/rx";

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
                <div className={styles.actions}>

                    <button
                        className={classNames(styles.openMenuButton, 'iconButton')}
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <RxHamburgerMenu className={styles.menuButton} />
                    </button>
                </div>
            </section>

            <SidebarNavigationMenu open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </header>
    );
};
