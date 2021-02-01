// next/head, the header for the Page
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from  'next/link';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Link href="/ProductListComponent">
        <a>List of Products</a>
      </Link>
      <Link href="/CreateProductComponent">
        <a>Create Product</a>
      </Link>
    </div>
  )
}
