import styles from '../../css/dashboard/dashboard.module.css'
import bcp from '../../img/bancos/bcp.png'
const Dashboard = () => {
    return (
        <div className="container-fluid text-white">
            <div className='container'>
                <div className="row">
                    <div className="col-6 pad">
                        <div className={styles.bgDark}>
                            <h4>Datos personales</h4>
                            <div className='datos'>
                            <div className={styles.datosList}>
                                    <div>
                                    <i className='bi-envelope mx-2'/>
                                        Correo electronico
                                    </div>
                                    <button> Agregar </button>
                                </div>
                                <div className={styles.datosList}>
                                    <div>
                                    <i className='bi-person mx-2'/>
                                        Nombre completo
                                    </div>
                                    <button> Agregar </button>
                                </div>
                                <div className={styles.datosList}>
                                    <div>
                                    <i className='bi-telephone mx-2'/>
                                        Numero de telefono
                                    </div>
                                    <button> Agregar </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pad">
                        <div className={styles.bgDark}>
                            <div className={styles.bancos}>
                                <h4>Cuentas de banco</h4>
                                <button> <i className='bi-plus-circle'/> Agregar banco </button>
                            </div>
                            <div className='mt-1'>
                                <div className={styles.bList}>
                                    <div className={styles.bListIn}>
                                        <img src={bcp} alt="" />
                                        <div>
                                            <h4>BCP - Soles</h4>
                                            <b>Jason Hernandez </b>
                                            <h3>Ahorros</h3>
                                        </div>
                                    </div>
                                    <i className='bi-trash'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
/*
Bancos
    Nombre del banco  
    tipo de cuenta 
    tipo de moneda 
    titular 

transacciones

Perfil nombre correo telefono
*/