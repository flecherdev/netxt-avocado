import NavBar from '@components/NavBar/NavBar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch('/api/evo')
      .then(res => res.json())
      .then(({data, length}) => {
        setProductList(data)
      })
  }, [])
  

  return (
    <div>
      <NavBar />
      <p>Esta es la pagina de home</p>
      {productList.map((product: TProduct) => (
        <div key={product?.id}>{product?.name}</div>
      ))}
    </div>
  )
}

export default Home
