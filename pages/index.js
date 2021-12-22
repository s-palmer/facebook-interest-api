import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { getServerSideProps } from "../assets/Services/fetchData";

export default function Home() {
  const [isLoad, setIsLoad] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    const interestData = async () => {
      const requestData = await getServerSideProps();
      const interestData = await requestData.props.interests;
      setDataFromServer(interestData);
      setIsLoad(true);
    };
    interestData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Facebook Interest Searcher</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Search for Hidden Facebook Interests</h1>

        <p className={styles.description}>
          Just enter your query into the search box below:
        </p>
        <div>
          {isLoad && (
            <>
              {dataFromServer.map((int) => (
                <p key={int.id}>{int.name}</p>
              ))}
            </>
          )}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
