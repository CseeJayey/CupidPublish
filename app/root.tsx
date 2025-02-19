import '~/src/styles/reset.scss';
import '~/src/styles/colors.scss';
import '~/src/styles/typography.scss';
import '~/src/styles/global.scss';
import '~/src/styles/utils.scss';

import {
    Links,
    Meta,
    type MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import { RouteBreadcrumbs } from '~/src/components/breadcrumbs/use-breadcrumbs';
import { Footer } from '~/src/components/footer/footer';
import { Header } from '~/src/components/header/header';
import { NavigationProgressBar } from '~/src/components/navigation-progress-bar/navigation-progress-bar';
import { Toaster } from '~/src/components/toaster/toaster';
import styles from './root.module.scss';


const breadcrumbs: RouteBreadcrumbs = () => [{ title: 'Home', to: '/' }];

export const handle = {
    breadcrumbs,
};

export function Layout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {

    return (
        <div>
            <div className={styles.root}>
                <Header />
                <main className={styles.main}>
                    <Outlet />
                </main>
                <Footer />
            </div>
            <NavigationProgressBar className={styles.navigationProgressBar} />
            <Toaster />
        </div>
    );
}

export const meta: MetaFunction = () => {
    const title = 'Quiz4Love';
    const description = 'Quiz4Love';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: '/images/hero2.jpg',
        },
    ];
};

export { ErrorBoundary } from '~/src/components/error-page/error-page';
