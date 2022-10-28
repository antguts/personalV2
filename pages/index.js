import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Ants from './ants' 
import Footer from './footer.js'


export default function Home() {
  let test=[1,4,3,2,5]
  
  return (
    //begin doc
    <div>

    <div className={styles.main}>
      <h1>Business</h1>
      <h1>Personal</h1>
    </div>
    {/* end main   */}
    
    <Footer />
    </div>
    //end doc

    
  )
}
