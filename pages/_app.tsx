import { AppProps } from 'next/app';

import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>My top</title>
                <link
                    rel='preconnect'
                    href='https://fonts.googleapis.com'
                />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    // crossOrigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
