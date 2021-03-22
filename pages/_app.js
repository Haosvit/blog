import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>HN's</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
