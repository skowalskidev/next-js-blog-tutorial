import Layout from '../../components/layout';
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css"
import {Game} from "../../components/game";

export default function TicTacToe() {
    return (
        <Layout>
            <Head>
                <title>Tic tac toe game</title>
            </Head>
            <h1 className={utilStyles.headingXl}>Tic tac toe game</h1>
            <Game/>
        </Layout>
    );
}