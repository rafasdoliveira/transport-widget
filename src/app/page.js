import FindDriver from "@/components/FindDriver/page";
import DriverDetails from "@/components/DriverDetails/page"
import Input from "@/components/Input/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_container}> 
          <span className={styles.paradinhaCinza}></span>
          <div className={styles.driver__find}>
            <FindDriver 
            motorista='Boris' minutos='3 minutos' distancia='800' medida='metros'
            />
          </div>
          <div className={styles.driver__details}>
          <DriverDetails placa='BCDOD19' modelo='Honda Civic Roxo'/>
          </div>
          <div>
            <Input type='text' placeholder='Enviar mensagem para Boris...'/>
          </div>
      </div>
    </main>
  );
}
