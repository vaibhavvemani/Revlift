import Image from "next/image";
import styles from "./page.module.css";

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
      <div className={`${styles.searchIcon} ${styles.headerIcon}`}>
        <input className={styles.searchBar} type="text" placeholder="search"/>
        <Image src="/search.svg" alt="Search Icon" width={30} height={30} />
      </div>
      <div className={`${styles.wishlistIcon} ${styles.headerIcon}`}>
        <Image src="/wishlist.svg" alt="Wishlist Icon" width={30} height={30} />
      </div>
      <div className={`${styles.accountIcon} ${styles.headerIcon}`}>
        <Image src="/account.svg" alt="Account Icon" width={30} height={30} />
      </div>
    </div>

  )
}

export default function Home() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>

        <LeftNav />
        <LogoNav />
        <RightNav />

      </header>

      <main className={styles.main}>
      </main>
    </div>
  );
}
