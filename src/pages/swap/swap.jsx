import styles from '../../css/swap/swap.module.css'
import usdt from '../../img/monedas/usdt.png'
import sol from '../../img/monedas/sol.png'
import dobleArrow from '../../img/dobleArrow.svg'
import {Grafic} from '../../components/grafic/grafic'
import { useContext, useState } from 'react'
import ModalFiat from '../../components/modals/modalFiat'
import ModalCrypto from '../../components/modals/modalCrypto'
import { DataContext } from '../../context/DataContext'
function Swap() {

    const {config} = useContext(DataContext)
    const [modalFiat,setModalFiat] = useState(false)
    const [modalCrypto,setModalCrypto] = useState(false)
    const [changeType,setChangeType] = useState(true)

    return (
        <div className="container-fluid">
            {modalFiat && <ModalFiat setModalFiat={setModalFiat}/>}
            {modalCrypto && <ModalCrypto setModalCrypto={setModalCrypto}/>}
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
                                        <img src={usdt} alt="" />
                                        <div className='mx-2'>USDT</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input type="text" placeholder='0.0' name="" id="" />
                            </>:<>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalFiat(true)} className={styles.select}>
                                        <img src={sol} alt="" />
                                        <div className='mx-2'>SOLES</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input type="text" placeholder='0.0' name="" id="" />
                            </>}
                            

                            <div onClick={()=>setChangeType(!changeType)} className={styles.dobleArrowWrap}>
                                <div className={styles.dobleArrowCircle}>
                                    <img src={dobleArrow} alt="" />
                                </div>
                            </div>

                            {changeType ? <>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalFiat(true)} className={styles.select}>
                                        <img src={sol} alt="" />
                                        <div className='mx-2'>SOLES</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input type="text" placeholder='0.0' name="" id="" />
                            </>:<>
                                <div className='mb-2 d-flex'>
                                    <div onClick={()=>setModalCrypto(true)} className={styles.select}>
                                        <img src={usdt} alt="" />
                                        <div className='mx-2'>USDT</div>
                                        <i className="bi-chevron-down"></i>
                                    </div>
                                </div>
                                <input type="text" placeholder='0.0' name="" id="" />
                            </>}

                          

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