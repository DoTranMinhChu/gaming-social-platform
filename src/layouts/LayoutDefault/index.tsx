import Navbar from "components/Navbar";
import Head from "next/head";
import React from "react";
import styles from './LayoutDefault.module.scss';

type DefaultProps = {
    children: React.ReactNode;
};

type LayoutDefaultProps = {
    title?: string;
    description?: string;
    author?: string;
    keywords?: string;
    children: React.ReactNode;
    isShowNavbar?: boolean;
    isShowFooter?: boolean;
};



export default function LayoutDefault(props: LayoutDefaultProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <link rel="icon" href="favicon.ico" />
                <meta property="image" content="favicon.ico" />

                {/*  Google / Search Engine Tags  */}
                <meta itemProp="name" content={props.title} />
                <meta itemProp="description" content={props.description} />
                <meta itemProp="author" content={props.author} />
                <meta itemProp="keywords" content={props.keywords} />

                <meta
                    itemProp="image"
                    content="https://avatars.githubusercontent.com/u/86542102"
                />

                {/*  Facebook Meta Tags */}
                <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                <meta property="og:author" content={props.author} />
                <meta property="og:keywords" content={props.keywords} />
                <meta
                    property="og:image"
                    content="https://avatars.githubusercontent.com/u/86542102"
                />

                {/*  Twitter Meta Tags */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:author" content={props.author} />
                <meta name="twitter:keywords" content={props.keywords} />
                <meta
                    name="twitter:image"
                    content="https://avatars.githubusercontent.com/u/86542102"
                />
            </Head>
            {props.isShowNavbar && <Navbar />}
            <LayoutDetail {...props} />
            {/* {props.isShowFooter && <Footer />} */}
            {/* <ModalTime handleClose={handleClose} open={open} /> */}
            <div className={styles.groupBtn}>
                <button onClick={scrollToTop}>
                    <img src="/images/top-btn.jpg" alt="on top" />
                </button>
            </div>
        </>
    );
}

export const LayoutDetail = (props: DefaultProps) => {
    return <>{props.children}</>;
};
