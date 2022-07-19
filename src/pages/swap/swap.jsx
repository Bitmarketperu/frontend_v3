import styles from '../../css/swap/swap.module.css'
import usdt from '../../img/monedas/usdt.png'
import sol from '../../img/monedas/sol.png'
import dobleArrow from '../../img/dobleArrow.svg'
import {Grafic} from '../../components/grafic/grafic'
import { useState } from 'react'
import Modal from '../../components/modal/modal'
function Swap() {

    const [modal,setModal] = useState(false)

    return (
        <div className="container-fluid">
            {modal && <Modal setModal={setModal}/>}
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
                            <div className='mb-2 d-flex'>
                                <div onClick={()=>setModal(true)} className={styles.select}>
                                    <img src={usdt} alt="" />
                                    <div className='mx-2'>USDT</div>
                                    <i className="bi-chevron-down"></i>
                                </div>
                            </div>
                            <input type="text" placeholder='0.0' name="" id="" />
                            <div className={styles.dobleArrowWrap}>
                                <div className={styles.dobleArrowCircle}>
                                    <img src={dobleArrow} alt="" />
                                </div>
                            </div>
                            <div className='mb-2 d-flex'>
                                <div onClick={()=>setModal(true)} className={styles.select}>
                                    <img src={sol} alt="" />
                                    <div className='mx-2'>SOLES</div>
                                    <i className="bi-chevron-down"></i>
                                </div>
                            </div>
                            <input type="text" placeholder='0.0' name="" id="" />
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