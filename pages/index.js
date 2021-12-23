import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import DataTable from "../assets/components/dataTable";
import SearchBox from "../assets/components/searchBox";
import DownloadButton from '../assets/components/downloadButton'
import sendPostRequest from '../assets/Services/sendPostRequest.js'

export default function Home() {
  const [isLoad, setIsLoad] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [userQuery, setUserQuery] = useState([]);

  const fetchInterestData = async (query) => {
    setUserQuery(query);
    const requestData = await sendPostRequest(query);
    setDataFromServer(requestData);
    setIsLoad(true);
  };

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
          Enter your query into the search box:
        </p>
        <SearchBox fetchInterestData={fetchInterestData}/>
        <div>
          {isLoad && (
            <>
              {dataFromServer.length > 0 ? (
                <>
                <DownloadButton query={userQuery} data={dataFromServer}/>
                <DataTable dataFromServer={dataFromServer}></DataTable> 
                </>
              ) : (
                <p>No data returned</p>
              )}
            </>
          )}
        </div>
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
