import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, Link, useSearchParams, MetaFunction } from '@remix-run/react';
import { posts } from '~/src/data/postData';
import styles from './route.module.scss';
import classNames from 'classnames';
import { getExcerpt } from '~/src/wix/utils/get-excerpt';
import Fuse from 'fuse.js';

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const author = searchParams.get('author') || '';
    const searchQuery = searchParams.get('search') || '';
    const fuseOptions = {
        keys: ['title', 'content'],
        threshold: 0.3, // Adjust for more/less strict matching
        ignoreLocation: true,
        findAllMatches: true
    };

    let filteredPosts = posts;

    if (searchQuery) {
        const fuse = new Fuse(posts, fuseOptions);
        filteredPosts = fuse.search(searchQuery).map(result => result.item);
    }

    if (author) {
        filteredPosts = filteredPosts.filter(post => post.author === author);
    }

    const authors = [...new Set(posts.map(post => post.author))];

    return Response.json({ posts: filteredPosts, authors });
};
export interface Post {
    slug: string;
    title: string;
    content: string;
    author: string;
    publishedDate: string;
    previewImage: string | undefined;
}

export default function PostsPage() {
    const { posts, authors } = useLoaderData<typeof loader>();
    const [searchParams, setSearchParams] = useSearchParams();

    // Handle search and filter changes
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearchParams({ search });
    };

    const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const author = e.target.value;
        setSearchParams(author ? { author } : {});
    };

    return (
        <div className={styles.page}>
            <h1>Quiz4Love Blog</h1>

            <div className={styles.filters}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchParams.get('search') || ''}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />

                <select
                    value={searchParams.get('author') || ''}
                    onChange={handleAuthorChange}
                    className={styles.authorSelect}
                >
                    <option value="">All Authors</option>
                    {authors.map((author: string) => (
                        <option key={author} value={author}>
                            {author}
                        </option>
                    ))}
                </select>
            </div>

            <ul className={styles.postList}>
                {posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <li key={post.slug} className={styles.postItem}>
                            <Link to={`/post/${post.slug}`}>
                                <div className={styles.heroImage}>
                                    <img
                                        src={post.previewImage}
                                        alt={post.title}
                                        className={styles.heroImageImg}
                                    />
                                    <div className={styles.heroImageContentBox}>
                                        <h1 className={styles.heroImageTitle}>{post.title}</h1>
                                        <h4 className={styles.postMeta}>
                                            {post.author} ∙{' '}
                                            {new Date(post.publishedDate).toLocaleString('en-GB', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric',
                                            })}
                                        </h4>
                                        <div className={styles.heroImageDescription}>
                                            <article
                                                className={classNames(
                                                    styles.content,
                                                    'postContent',
                                                )}
                                            >
                                                {getExcerpt(post.content)}
                                            </article>
                                        </div>
                                        <button className={styles.heroImageExploreButton}>
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    <h1>No posts found 🦗</h1>
                )}
            </ul>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Blog | Quiz4Love' },
        {
            name: 'description',
            content: 'Quiz4Love',
        },
    ];
};