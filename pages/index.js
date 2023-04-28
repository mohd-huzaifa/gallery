import Head from 'next/head';
import styles from '../styles/Home.module.css';
import GridPhoto from '../components/GridPhoto';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import url from '../assets/back.jpg'
import Search from '../components/Search';
import { Droppable } from 'react-drag-and-drop';
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setData(data);

    };
    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gallery</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Search />
      <Droppable>
        <div className="container">
          <h3 className='h-3 text-center mx-2 my-1 fw-bold'>All Images Images</h3>
          <div className="row mx-2 my-1 justify-content-start">
            {
              data.map((item) => {
                return <GridPhoto desc={item.desc} url={item.url} id={item.id} />
              })
            }
          </div>
        </div>
      </Droppable>
    </div>
  )
}
