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
        </div>
    )
}