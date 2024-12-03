import React from 'react'
import Image from "next/image";
import "./globals.css"
import styles from "../styles/layout.module.css";

function LeftNav() {
    return (
      <div className={styles.leftNav}>
        <button className={styles.catalogueButton}>Catalogue</button>        
        <Image src="/catalogue.svg" alt="Catalogue Icon" width={30} height={30}/>
      </div>
    )
  }
  function LogoNav() {
    return (
      <div className={styles.logo}>
        <div className={styles.carIcon}>
          <Image src="/rb_13544.png" alt="Car Icon Logo" width={100} height={100} />
        </div>
        <h1>REVLIFT</h1>
      </div>
    )
  }
  function RightNav() {
    return (
      <div className={styles.rightNav}>
        {/* <div className={`${styles.searchIcon} ${styles.headerIcon}`}>
          <input className={styles.searchBar} type="text" placeholder="search"/>
          <Image src="/search.svg" alt="Search Icon" width={30} height={30} />
        </div> */}
        <div className={`${styles.wishlistIcon} ${styles.headerIcon}`}>
          <Image src="/wishlist.svg" alt="Wishlist Icon" width={30} height={30} />
        </div>
        <div className={`${styles.accountIcon} ${styles.headerIcon}`}>
          <Image src="/account.svg" alt="Account Icon" width={30} height={30} />
        </div>
      </div>
  
    )
  }

export const metadata = {
  title: "Revlift",
  description: "A comprehensive Car Wiki",
};
  

const Header = ( { children } ) => {
  return (
    <html lang='en'>
      <body>
        <header className={styles.header}>
          <LogoNav />
          <LeftNav />
          <RightNav />
        </header>

        {children}
      </body>
    </html>
  )
}

export default Header