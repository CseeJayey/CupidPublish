import type { LoaderFunctionArgs } from '@remix-run/node';
import { MetaFunction, useLoaderData } from '@remix-run/react';
import { BreadcrumbData, Breadcrumbs } from '~/src/components/breadcrumbs/breadcrumbs';
import { RouteBreadcrumbs, useBreadcrumbs } from '~/src/components/breadcrumbs/use-breadcrumbs';
import { posts } from '~/src/data/postData';
import styles from './route.module.scss';
import type { GetStaticRoutes } from '@wixc3/define-remix-app';
import classNames from 'classnames';
import DOMPurify from "isomorphic-dompurify";
import { useEffect } from 'react';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    if (!params.postSlug) throw new Response('Bad Request', { status: 400 });

    const post = posts.find((p) => p.slug === params.postSlug);

    if (!post) {
        throw new Response('Not Found', { status: 404 });
    }
    
    return Response.json(post);
};

export const getStaticRoutes: GetStaticRoutes = async () => {
    return posts.map((post) => `/post/${post.slug}`);
};

const breadcrumbs: RouteBreadcrumbs<typeof loader> = (match) => {
    const post = match.data;

    const breadcrumbs: BreadcrumbData[] = [
        {
            title: 'Posts',
            to: '/posts',
        },
        {
            title: post?.title
                ? post.title.length > 40
                    ? `${post.title.slice(0, 40)}...`
                    : post.title
                : 'Loading...',
            to: post ? `/post/${post.slug}` : '#',
        },
    ];

    return breadcrumbs;
};


export const handle = {
    breadcrumbs,
};

export default function PostSlug() {
    const post = useLoaderData<typeof loader>();
    const breadcrumbs = useBreadcrumbs();
    const sanitizedData = () => ({
        __html: DOMPurify.sanitize(post.content),
    });
    useEffect(() => {
        const handleAnchorClick = (event: Event) => {
            const target = event.target as HTMLElement | null;
            const targetId = target?.getAttribute('href')?.substring(1);
            if (targetId) {
                event.preventDefault();
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, '', `#${targetId}`);
                }
            }
        };

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        // Cleanup listeners on component unmount
        return () => {
            anchorLinks.forEach(link => {
                link.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);
    return (
        <div className={styles.page}>
            <div className={styles.postContainer}>
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                <div className={styles.content}>
                    <div className={styles.contentMeta}>
                        <h1>{post.title}</h1>
                        <h3>
                            {post.author} ∙ {new Date(post.publishedDate).toLocaleString()}
                        </h3>
                    </div>
                    <div className={styles.contentBody}>
                        <article
                            className={classNames(styles.content, "postContent")}
                            dangerouslySetInnerHTML={sanitizedData()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    if (!data) {
        return [
            { title: 'Post Not Found | Quiz4Love' },
            {
                name: 'description',
                content: 'Post not found on Quiz4Love',
            },
        ];
    }

    return [
        { title: `${data.title} | Quiz4Love` },
        {
            name: 'description',
            content: data.excerpt || 'Quiz4Love',
        },
    ];
};
