import classNames from 'classnames';
import { useLocation } from '@remix-run/react';
import { Drawer } from '../drawer/drawer';
import { CrossIcon } from '../icons';
import { NavigationMenu } from '../navigation-menu/navigation-menu';
import styles from './sidebar-navigation-menu.module.scss';
import { useEffect, useRef } from 'react';

interface SidebarNavigationMenuProps {
    open: boolean;
    onClose: () => void;
}

export const SidebarNavigationMenu = ({ open, onClose }: SidebarNavigationMenuProps) => {
    const location = useLocation();
    const previousPathname = useRef(location.pathname);

    useEffect(() => {
        if (previousPathname.current !== location.pathname) {
            onClose();
            previousPathname.current = location.pathname;
        }
    }, [location.pathname, onClose]);

    return (
        <Drawer open={open} onClose={onClose} drawerClassName={styles.drawer}>
            <NavigationMenu vertical className={styles.menu} />
            <button className={classNames(styles.closeButton, 'iconButton')} onClick={onClose}>
                <CrossIcon />
            </button>
        </Drawer>
    );
};
