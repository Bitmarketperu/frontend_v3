import styles from '../../css/swap/swap.module.css'
import usdt from '../../img/monedas/usdt.png'
import dai from '../../img/monedas/dai.png'
import sol from '../../img/monedas/sol.png'
import usd from '../../img/monedas/usd.png'
import busd from '../../img/monedas/busd.png'
import dobleArrow from '../../img/dobleArrow.svg'
import {Grafic} from '../../components/grafic/grafic'
import { useContext, useState } from 'react'
import ModalFiat from '../../components/modals/modalFiat'
import ModalCrypto from '../../components/modals/modalCrypto'
import { DataContext } from '../../context/DataContext'
import efectivo from '../../img/monedas/efectivo.png'
import Loader from '../../components/loader/Loader'
function Swap() {

    const {config,comision,setComision,loading,setLoading} = useContext(DataContext)

    const [modalFiat,setModalFiat] = useState(false)
    const [modalCrypto,setModalCrypto] = useState(false)
    const [changeType,setChangeType] = useState(true)
    const [crypto,setCrypto] = useState("")
    const [fiat,setFiat] = useState("")
    const [selectedFiat,setSelectedFiat] = useState("SOLES")
    const [selectedCrypto,setSelectedCrypto] = useState("USDT")
    const [fiatImg,setFiatImg] = useState(sol)
    const [cryptoImg,setCryptoImg] = useState(usdt)
    
    // 0:c->s 
    // 1:c->D 
    // 2:s->c 
    // 3:D->c

    const select = (coin)=>{
        setModalFiat(false)
        switch (coin) {
            case "DolaresTransferencia":
                setSelectedFiat("USD")
                setFiatImg(usd)
                calcComision()
                break;
            case "SolesTransferencia":
                setSelectedFiat("SOLES")
                setFiatImg(sol)
                calcComision()
                break
            case "EfectivoSoles":
                setSelectedFiat("SOLES")
                setFiatImg(efectivo)
                calcComision()
            case "EfectivoDolares":
                setSelectedFiat("USD")
                setFiatImg(efectivo)
                calcComision()
                break
            default:
                break
        }
    }

    const selectCrypto = (coin)=>{
        setModalCrypto(false)
        switch (coin) {
            case "dai":
                setSelectedCrypto("DAI")
                setCryptoImg(dai)
                calcComision()
                break
            case "usdt":
                setSelectedCrypto("USDT")
                setCryptoImg(usdt)
                calcComision()
                break
                case "busd":
                    setSelectedCrypto("BUSD")
                    setCryptoImg(busd)
                    calcComision()
            default:
                break
        }
        
    }
    
    const getPriceCrypto = (value)=>{
        setCrypto(value)
        console.log(value)
        setFiat(value*3.4*0.97)
    }

    const calcComision = ()=> {
        if(selectedFiat == "USD" && !changeType){
            setComision(config.dolOut)
        }
        if(selectedFiat == "USD" && changeType){
            setComision(config.dolInp)
        }
        if(selectedFiat == "SOLES" && changeType){
            setComision(config.solInp)
        }
        if(selectedFiat == "SOLES" && !changeType){
            setComision(config.solOut)
        }
    }

    const getChangeType = ()=>{
        setChangeType(!changeType)
        calcComision()
    }

    return (
        <div className="container-fluid">
            {loading && <Loader/>} 
            {modalFiat && <ModalFiat setModalFiat={setModalFiat} select={select}/>}
            {modalCrypto && <ModalCrypto setModalCrypto={setModalCrypto}  selectCrypto={selectCrypto}/>}
            <div className='container'>
                <div className="row">
                    <div className="col-7 pad text-white">
                        <div className={styles.grafic}>
                            <Grafic />
                        </div>
                    </div>
                    <div className="col-5 pad">
                        <div className={styles.swapSection}>
                            <h2> Swap </h2>
                            <p> Cambia tokens al instante </p>
                            <hr />
                            {changeType ? <>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalCrypto(true)} className={styles.select}>
                                        <img src={cryptoImg} alt="" />
                                        <div className='mx-2'>{selectedCrypto}</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input onChange={(e)=>getPriceCrypto(e.target.value)} type="text" placeholder='0.0' value={crypto} />
                            </>:<>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalFiat(true)} className={styles.select}>
                                        <img src={fiatImg} alt="" />
                                        <div className='mx-2'>{selectedFiat}</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input onChange={(e)=>setFiat(e.target.value)} type="text" placeholder='0.0' name="2" id="2" value={fiat} />
                            </>}
                            

                            <div className={styles.dobleArrowWrap}>
                                <div onClick={getChangeType}  className={styles.dobleArrowCircle}>
                                    <img src={dobleArrow} alt="" />
                                </div>
                            </div>

                            {changeType ? <>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalFiat(true)} className={styles.select}>
                                        <img src={fiatImg} alt="" />
                                        <div className='mx-2'>{selectedFiat}</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input onChange={(e)=>setFiat(e.target.value)} type="text" placeholder='0.0' value={fiat} />
                            </>:<>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalCrypto(true)} className={styles.select}>
                                        <img src={cryptoImg} alt="" />
                                        <div className='mx-2'>{selectedCrypto}</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input onChange={(e)=>setCrypto(e.target.value)} type="text" placeholder='0.0' value={crypto} />
                            </>}
                            {changeType ? <>Crypto a Fiat </>:<> Fiat a Crypto </>}
                            <div className='mb-2 lb'>
                                Comision {comision}%
                            </div>
                            <div>
                                <button> Procesar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Swap