import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import url from '../assets/back.jpg'
import Head from 'next/head';
import Script from 'next/script'
import AddImage from '../components/AddImage'
import { useRouter } from 'next/router';
function detail() {
  const router = useRouter();
  const [url, setUrl] = useState();
  const [desc, setDesc] = useState();
  const { keyword } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      console.log(keyword)
      for (var i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.id == keyword) {
          setUrl(item.url);
          setDesc(item.desc)
        }
      }
    };
    fetchData()
  }, [])


  return (
    <>
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
      <div className="">
        <div className="container py-3">
          <div className="row p-1">
            <div className="col-7 p-1">
              <Image
                src={url}
                title='images'
                height={800}
                width={800}
              />
            </div>
            <div className="col-5">
              <h6 className='h-6 fw-bold'>More description about image</h6>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">Add New Images</div>
      <AddImage />
    </>
  )
}

export default detail
