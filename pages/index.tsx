import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import {getSortedPostsData} from '../lib/posts';
import Link from "next/link";
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}: any) {
    return (
        <Layout home>
            {/* Keep the existing code here */}

            {/* Add this <section> tag below the existing <section> tag */}
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}: any) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                    <li className={utilStyles.listItem} key='game-link-li'>
                        <Link href={`/game/tic-tac-toe`}>Tic tac toe game</Link>
                    </li>
                </ul>
            </section>
        </Layout>
    );
}