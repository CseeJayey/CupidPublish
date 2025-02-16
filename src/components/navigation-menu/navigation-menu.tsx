import classNames from 'classnames';
import { NavLink } from '@remix-run/react';
import styles from './navigation-menu.module.scss';

interface NavigationMenuProps {
    className?: string;
    vertical?: boolean;
}

export const NavigationMenu = ({ className, vertical = false }: NavigationMenuProps) => {
    const menuItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.menuItem, {
            [styles.active]: isActive,
        });

    return (
        <nav className={className}>
            <ul className={classNames(styles.menuList, { [styles.vertical]: vertical })}>
                <li>
                    <NavLink to="/" className={menuItemStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" className={menuItemStyle}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" className={menuItemStyle}>
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quiz" className={menuItemStyle}>
                        Take The Test!
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
