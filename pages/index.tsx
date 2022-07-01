import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Suspense } from 'react'
import dynamic from 'next/dynamic';

const Articles = dynamic(
  () =>  import('../components/articles'),
  { suspense: true }
);

const Home: NextPage = () => { 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Articles/>
    </Suspense>
  )
}

export default Home
