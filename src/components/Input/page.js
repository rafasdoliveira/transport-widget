import styles from './page.module.css'

export default function Input({type, placeholder}) {
    return(
        <div className={styles.inputComponent}>
            <div>       
                <input className={styles.input}
                type={type} 
                placeholder={placeholder} 
                required
                />
            </div>
            <div className={styles.vector}>
                <span>
                    <img className={styles.fone} src='/Vector1.svg'></img>
                </span>
                <span>
                    <img className={styles.security} src='/Vector.svg'></img>
                </span>
            </div>
        </div>
    )
}