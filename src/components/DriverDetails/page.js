import styles from './page.module.css'
export default function DriverDetails({placa, modelo}) {
    return(
        <div className={styles.driverdetails}>
            <div className={styles.imgName}>
                <span>
                    <img className={styles.driver} src='/image 3770.svg'></img>
                </span>
                <div className={styles.pontuacao}>
                    <span>
                        <img className={styles.star} src='/star.svg'></img>
                    </span>
                    <span>
                        5.0
                    </span>
                </div>
                <span className={styles.driverName}>
                    Boris C.
                </span>
            </div>               
                <span>
                    <img className={styles.car} src='/car.svg'></img>
                </span>

            <div className={styles.dadosCarro}>
               <span className={styles.placa}>{placa}</span>
               <span className={styles.modelo}>{modelo}</span>
            </div>
            <div>

            </div>
        </div>
    
    )
}