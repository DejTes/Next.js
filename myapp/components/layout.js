import Head from 'next/head';

function Layout (props) {
    return (
        <>
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <h1>This is the Dogs app</h1>
        </header>
        <hr />
        {props.children}
        <hr />

        <footer>NextJs website By Dej 2023 </footer>
        </>
    )
}

export default Layout;

