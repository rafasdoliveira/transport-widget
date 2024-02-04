import styles from './page.module.css'

export default function FindDriver({motorista, minutos, distancia, medida}) {
    return(
        <div className={styles.findDriver}>
            <h4>
                Encontre  
                <span className={styles.driver}> {motorista}</span> no local de partida
            </h4>
            <p className={styles.distancia_tempo}>
                Chega em { minutos} ({ distancia} { medida})
            </p>
        </div>
    )
}