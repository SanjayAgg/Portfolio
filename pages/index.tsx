import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  )
}
