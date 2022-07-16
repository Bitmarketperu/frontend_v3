import { useEffect } from "react"
import { useState } from "react"
import Web3 from "web3"
import styles from '../../css/home/home.module.css'
import llama from '../../img/llama.png'
const web3 = new Web3("https://bsc-dataseed.binance.org/")
const Home = ()=>{

    const [balance,setBalance] = useState(false)
    useEffect(()=>{
        getBalance()
    },[])

    const getBalance = async ()=>{
        let _balance = await web3.eth.getBalance("0x37fDEd159F8bb80B69f29C18FC293c939F9cC5A3")
        _balance = web3.utils.fromWei(_balance.toString(),"ether")
        setBalance(_balance)
    }

    return (
        <div className="container-fluid">
            <div className="row gx-0 homeSection1">
                <div className="col-7">
                    <div className={styles.header1}>
                        <div className={styles.header1In}>
                            <h1>Compra y vende tus cryptos rapido y seguro</h1>
                            <p>Retira tus Soles o Dolares en efectivo en nuestras instalaciones
                                en Miraflores, lima o retira via transferencia bancaria.
                            </p>
                            <div>
                                <button className={styles.button1}> Saber Más</button>
                                <button className={styles.button2}> Cambiar Ahora </button>
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