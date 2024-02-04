import styles from './page.module.css'
export default function DriverDetails({placa, modelo}) {
    return(
        <div className={styles.driverdetails}>
                <span>
                    <img className={styles.driver} src='/rafa.jpeg'></img>
                </span>
                <span>
                    <img className={styles.car} src='/car.jpg'></img>
                </span>
            <div className={styles.dadosCarro}>
               <span className={styles.placa}>{placa}</span>
               <span className={styles.modelo}>{modelo}</span>
            </div>
        </div>

    )
}