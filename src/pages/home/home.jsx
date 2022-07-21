import { useContext } from "react"
//import { useState } from "react"
//import Web3 from "web3"
import styles from '../../css/home/home.module.css'
import llama from '../../img/llama.png'
import { NavLink } from 'react-router-dom'
import Loader from "../../components/loader/Loader"
import { DataContext } from "../../context/DataContext"
//const web3 = new Web3("https://bsc-dataseed.binance.org/")

const Home = ()=>{
 
    const {loading} = useContext(DataContext)

    return (
        <div className="container-fluid">
            {loading && <Loader/>} 
            <div className="row gx-0 homeSection1">
                <div className="col-7">
                    <div className={styles.header1}>
                        <div className={styles.header1In}>
                            <h1>Compra y vende tus cryptos rapido y seguro</h1>
                            <p>Retira tus Soles o Dolares en efectivo en nuestras instalaciones
                                en Miraflores, lima o retira via transferencia bancaria.
                            </p>
                            <div className="d-flex">
                                <NavLink to="/" className={styles.navLinkbtn}> 
                                    <div className={styles.button1}>
                                        Saber Más
                                    </div>
                                </NavLink>
                                <NavLink to="/swap" className={styles.navLinkbtn}> 
                                    <div className={styles.button2}> 
                                        Cambiar Ahora 
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className={styles.header2}>
                        <img src={llama} alt="" />
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Home