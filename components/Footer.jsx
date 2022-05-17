import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
        <div className={styles.item}>
            <div className={styles.card}>
            <h2 className={styles.motto}>
                <p>MOTIVATONAL QUOTE</p>
                <p>WE ARE THE BEST AND SMTH LIKE THAT</p>
            </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            <p className={styles.text}>
                ul. Szewska 21
                <br /> Cracow, Stare Miasto
                <br /> (+48) 453 208 917
            </p>
            <p className={styles.text}>
                ul. Florianska 37
                <br /> Cracow, Stare Miasto
                <br /> (+48) 672 912 734
            </p>
            <p className={styles.text}>
                ul. Starowislna 21
                <br /> Cracow, Kazimierz
                <br /> (+48) 378 190 672
            </p>
            <p className={styles.text}>
                ul. Jozefa 15
                <br /> Cracow, Kazimierz
                <br /> (+48) 742 890 127
            </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
                MONDAY - THURSDAY
                <br /> 10:00 – 22:00
            </p>
            <p className={styles.text}>
                FRIDAY - SUNDAY
                <br /> 12:00 – 02:00
            </p>
        </div>
      </div>
    </div>
    )
}

export default Footer