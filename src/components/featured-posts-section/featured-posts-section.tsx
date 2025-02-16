import classNames from 'classnames';
import styles from './featured-posts-section.module.scss';
import { posts } from '~/src/data/postData';
import { Link, NavLink } from '@remix-run/react';
import { FadeIn, Reveal } from '~/src/components/visual-effects';
import { LabelWithArrow } from '../label-with-arrow/label-with-arrow';

interface FeaturedPostsSectionProps {
    title?: string;
    description?: string;
    postCount?: number;
    className?: string;
    linkTo?: string;
}

export const FeaturedPostsSection = (props: FeaturedPostsSectionProps) => {
    const { title = 'Featured Posts', description, postCount = 3, className, linkTo = "" } = props;
    const featuredPosts = posts.slice(0, postCount);

    return (
        <div className={classNames(styles.root, className)}>
            <FadeIn className={styles.header} duration={1.8}>
                <h3 className={styles.headerTitle}>{title}</h3>
                <div className={styles.headerDescription}>{description}
                    <NavLink to={linkTo} className={classNames(styles.headerLink)}>
                        <LabelWithArrow>Blogs</LabelWithArrow>
                    </NavLink>
                </div>

            </FadeIn>
            <Reveal className={styles.posts} direction="down" duration={1.4}>
                {featuredPosts.map((post) => (
                    <Link key={post.slug} to={`/post/${post.slug}`} className={styles.postLink}>
                        <div className={styles.postCard}>
                            {post.previewImage && (
                                <img
                                    src={post.previewImage}
                                    alt={post.title}
                                    className={styles.postImage}
                                />
                            )}
                            <div className={styles.postContent}>
                                <h4 className={styles.postTitle}>{post.title}</h4>
                                <p className={styles.postAuthor}>By {post.author}</p>
                                <p className={styles.postDate}>
                                    {new Date(post.publishedDate).toLocaleDateString('en-GB')}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </Reveal>
        </div>
    );
};
