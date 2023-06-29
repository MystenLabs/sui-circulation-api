import Image from 'next/image'
import styles from './page.module.css'
import {DateTime} from "luxon";


export default function Home() {

    const nyTime = DateTime.local().setZone("America/New_York");
    const month = nyTime.month;
    const year = nyTime.year;


    return (
        <main className={styles.main}>
            <Image
                src="/sui-logo.svg"
                alt="Sui Logo"
                className={styles.logo}
                width={150}
                height={50}
                priority
            />

            <h1>Circulation Data</h1>
            <p>---</p>
            <h3>API Links:</h3>

            <main className={styles.main}>
                <main className={styles.grid}>
                    <h2>
                    </h2>
                    <h3>
                        <a href="/api/current_month_sui_circulation" className={styles.button} target="_blank">
                            Current Month [{month}/{year}]
                        </a>
                    </h3>
                    <h3>
                        <a href="/api/sui_circulation" className={styles.button} target="_blank">
                            Full Data
                        </a>
                    </h3>
                    <h2>
                    </h2>
                </main>

            </main>
        </main>

    )
}
