import Head from 'next/head'
import Image from 'next/image'
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  )
}
