import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Signup from './Signup'




export default function Home() {
  return (
    <div>
      {/* <h1>Welcome to PlusTree</h1>
      <button className='btn-warning'>click me</button> */}
      <Signup/>
    </div>
  )
}


