import styles from './label-link-out.module.scss';
import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';
import { FiExternalLink } from 'react-icons/fi';

export const LabelLinkOut: FC<HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div {...props} className={classNames(styles.root, className)}>
            <div className={styles.label} aria-hidden>
                {children}
            </div>
            <div className={styles.label}>{children}</div>
            <FiExternalLink className={styles.icon} />
        </div>
    );
};
