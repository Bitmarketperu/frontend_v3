import styles from '../../css/style404.module.css'
const E404 = ()=>{
    return ( 
    <div className={styles.bg404}>
        <div className={styles.w404}>
            <div className={styles.w404in}>
                <div>
                    <h2>404</h2> 
                    Direccion invalida
                    <form action="/">
                        <button className={styles.button}>Volver al inicio</button>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    </div>
    )
}
export default E404