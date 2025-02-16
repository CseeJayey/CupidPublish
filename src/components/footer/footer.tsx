import { Link, NavLink } from '@remix-run/react';
import classNames from 'classnames';
import { FadeIn } from '~/src/components/visual-effects';

import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const navItemStyle = ({ isActive }: { isActive: boolean }) =>
        classNames(styles.navItem, {
            [styles.active]: isActive,
        });

    return (
        <footer className={classNames(styles.root, className)}>
            <div className={styles.div2}>
                <FadeIn className={styles.navigation} duration={0.5}>
                    <nav>
                        <ul className={styles.navList}>
                            <li>
                                <NavLink to="/about-us" className={navItemStyle}>
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink to="/terms-and-conditions" className={navItemStyle}>
                                Terms & Conditions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/privacy-policy" className={navItemStyle}>
                                Privacy Policy
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={styles.navList}>
                        <li>
                            <Link
                                to="https://www.facebook.com/"
                                className={styles.navItem}
                                target="_blank"
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://www.instagram.com/"
                                className={styles.navItem}
                                target="_blank"
                            >
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </FadeIn>
                <FadeIn className={styles.bottomBar} duration={0.3}>
                    <Link to="/" className={styles.logo}>
                        <img
                            src="/q4l.svg"
                            alt=""
                            className={classNames(styles.img1, styles.img1)}
                        />
                    </Link>
                </FadeIn>
            </div>
            <div className={styles.copyright}>
                <span>© 2025 by BanhNgot.</span>
            </div>
        </footer>
    );
};
